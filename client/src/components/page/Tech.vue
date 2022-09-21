<template>
  <section class="wrapper">
    <Header />
    <main>
      <div class="tag_content_wrapper">
        <div class="tag_content">
          <ul v-for="(item, idx) in data" :key="idx">
            <li>
              <TagContentCard
                :imgUrl="item.imgUrl"
                :title="item.title"
                :author="item.author"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/organisms/Header.vue";
import TagContentCard from "@/components/molecules/TagContentCard.vue";
import Footer from "@/components/organisms/Footer.vue";
import LifeMockData, { Item } from "@/assets/hubmock/Lifehub";

interface Status {
  data: Item[];
}

export default defineComponent({
  name: "app",
  components: {
    Footer,
    Header,
    TagContentCard,
  },
  setup() {
    const data = ref(LifeMockData);
    return {
      data,
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
