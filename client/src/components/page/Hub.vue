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
import { defineComponent, onMounted, onUnmounted, ref, Ref } from "vue";
import { useRoute, RouteLocationNormalizedLoaded } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import TagContentCard from "@/components/molecules/TagContentCard.vue";
import Footer from "@/components/organisms/Footer.vue";
import LifeMockData, { Item } from "@/assets/hubmock/Lifehub";
import { useIntersection } from "@/hooks/useintersection";

interface Status {
  data: Ref<Item[]>;
  route: RouteLocationNormalizedLoaded;
  observer: IntersectionObserver | null;
  targetRef: Ref<Element | undefined>;
  countOfFetchData: number;
  beginIndexofFetchData: number;
}

export default defineComponent({
  name: "app",
  components: {
    Footer,
    Header,
    TagContentCard,
  },
  setup(): Status {
    const data = ref(LifeMockData.slice(0, 8));
    const itemLength = LifeMockData.length;
    const countOfFetchData = 8;
    const targetRef = ref<Element>();
    let beginIndexofFetchData = 0;

    const route = useRoute();

    const fetchData = () => {
      if (data.value.length >= itemLength) {
        return;
      }

      beginIndexofFetchData += countOfFetchData;
      data.value = [
        ...data.value,
        ...LifeMockData.slice(
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
      route,
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
