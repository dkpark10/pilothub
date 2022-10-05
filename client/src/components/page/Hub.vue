<template>
  <section class="wrapper">
    <Header />
    <main>
      <div class="tag_content_wrapper">
        <div class="tag_content">
          <ul v-for="(item, idx) in data" :key="idx">
            <router-link :to="`post/${item.postId}`">
              <li>
                <TagContentCard
                  :imgUrl="item.imgUrl"
                  :title="item.title"
                  :author="item.author"
                  :webkitLineClamp="2"
                />
              </li>
            </router-link>
          </ul>
        </div>
        <div class="target" ref="targetRef" />
      </div>
    </main>
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, watch, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import TagContentCard from "@/components/molecules/TagContentCard.vue";
import Footer from "@/components/organisms/Footer.vue";
import { useIntersection } from "@/hooks/useintersection";
import { mockData } from "@/assets/hubmock/index";
import { NavName, PostItem } from "custom-type";

interface Status {
  data: Ref<PostItem[]>;
  observer: IntersectionObserver | null;
  targetRef: Ref<Element | undefined>;
  countOfFetchData: number;
  beginIndexofFetchData: number;
}

export default defineComponent({
  name: "app",
  components: {
    Header,
    TagContentCard,
    Footer,
  },
  setup(): Status {
    const countOfFetchData = 8;
    const targetRef = ref<Element>();
    let beginIndexofFetchData = 0;

    const route = useRoute();
    const category = route.params.category;
    const data = ref(mockData[category as NavName].slice(0, 8));
    const itemLength = mockData[category as NavName].length;

    watch(
      () => route.params.category,
      async (newParam) => {
        data.value = mockData[newParam as NavName];
      }
    );

    const fetchData = () => {
      if (data.value.length >= itemLength) {
        return;
      }

      beginIndexofFetchData += countOfFetchData;
      data.value = [
        ...data.value,
        ...mockData[category as NavName].slice(
          beginIndexofFetchData,
          beginIndexofFetchData + countOfFetchData
        ),
      ];
    };

    const observer = useIntersection(fetchData, {
      threshold: 0.45,
    });

    onMounted(() => {
      observer.observe(targetRef.value as Element);
    });

    onUnmounted(() => {
      if (targetRef.value) {
        observer.unobserve(targetRef.value as Element);
      }
    });

    return {
      data,
      observer,
      targetRef,
      countOfFetchData,
      beginIndexofFetchData,
    };
  },
});
</script>

<style lang="scss">
.tag_content_wrapper {
  @include hub-setion-wrapper;
  margin: 0;
  background-color: white;
}

.tag_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 8px;
}
</style>
