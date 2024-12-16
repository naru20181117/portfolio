<template>
  <div class="TextAnime">
    <transition-group tag="div" class="title">
      <!-- <span v-for="el in text" :key="el.id" class="item" v-text="el.text" /> -->
      <template v-for="el in text">
        <span
          v-if="!el.isNewline"
          :key="el.id"
          class="item"
          v-text="el.text"
        />
        <br v-else :key="el.id" />
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: Boolean
  },
  data() {
    return {
      timer: null,
      index: 0,
      original: [],
      messages: [],
      text: ""
    };
  },
  watch: {
    autoplay(val) {
      clearTimeout(this.timer);
      if (val) {
        this.ticker();
      }
    }
  },
  methods: {
    // オートタイマー
    ticker() {
      this.timer = setTimeout(() => {
        if (this.autoplay) {
          this.index =
            this.index < this.messages.length - 1 ? this.index + 1 : 0;
          this.text = this.messages[this.index];
          this.ticker();
        }
      }, 6000);
    },
    // テキストを分解してオブジェクトに
    convText(text) {
      const alms = {};
      const result = text.split("").map(el => {
        if (el === "\n") {
          return { id: `newline_${Math.random()}`, isNewline: true };
        } else {
          alms[el] = alms[el] ? ++alms[el] : 1;
          return { id: `${el}_${alms[el]}`, text: el };
        }
      });
      return Object.freeze(result); // 監視しない
    }
  },
  created() {
    const startDate = new Date(2018, 8); // 2018年9月（JavaScriptの月は0始まりなので8）
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();

    // 月と日の差を考慮
    const monthDifference = today.getMonth() - startDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < startDate.getDate())
    ) {
      years--;
    }
    years++; // 「◯年目」は開始年から+1する

    this.original = [
      `エンジニア${years}年目\n/\nフリーランスエンジニア`,
      "1人でWebサービス開発から運営まで\n/\n複数Webサービス運営",
      "新規サービス立ち上げなど\n/\nゼロイチを好んで活動中"
    ];
    this.messages = this.original.map(el => this.convText(el));
    this.text = this.messages[0];
    this.ticker();
  }
};
</script>

<style scoped>
.title {
  font-size: 2rem;
}
.item {
  display: inline-block;
  min-width: 0.3em;
}
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
