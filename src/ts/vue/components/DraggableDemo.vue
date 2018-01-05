<template>
    <div class="grid-x">
        <div class="small-6 small-offset-3 cell text-center">

            <h1>Demo of Vue.Dragon</h1>
            <p>AN example of how to use ‘VueDraggable’ and it's drag-n-drop capabilities. Sort, move, click and edit the configs to play around with it. It's pretty cool.</p>

            <br><br>

            <draggable v-model="myArray" class="grid-x grid-margin-x">
                    <div v-for="element in myArray" :key="element.id" class="small-12 medium-4 cell card list-complete-item">
                        <div class="card-section">
                            <h4>{{ element.name }}</h4>
                            <p>{{ element.description }}.</p>
                        </div>
                    </div>
            </draggable>

            <br>

            <draggable v-model="myArray">
                <li v-for="element in myArray" :key="element.id">{{ element.name }}</li>
            </draggable>
        </div>
    </div>
</template>

<script lang="ts">
import Draggable from "vuedraggable";

export default {
  name: "DraggableDemo",
  data() {
    return {
      myArray: [
        {
          id: 1,
          name: "This",
          description: "Some description"
        },
        {
          id: 2,
          name: "Is",
          description: "Some description"
        },
        {
          id: 3,
          name: "Pretty",
          description: "Some description"
        },
        {
          id: 4,
          name: "Awesome",
          description: "Some description"
        },
        {
          id: 5,
          name: "Is",
          description: "Some description"
        },
        {
          id: 6,
          name: "It",
          description: "Some description"
        },
        {
          id: 7,
          name: "Not",
          description: "Some description"
        },
        {
          id: 8,
          name: "?",
          description: "Some description"
        },
        {
          id: 9,
          name: "Yes... Yes it is",
          description: "Some description"
        }
      ]
    };
  },
  components: {
    Draggable
  }
};
</script>

<style lang="scss" scoped>
.list-complete-item {
  padding: 4px;
  margin-top: 4px;
  border: solid 1px #e9e9e9;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  background-color: #fff;
}

.sortable-chosen {
  background: #efefef;
}

</style>
