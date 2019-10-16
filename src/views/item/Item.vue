<template>
    <v-col cols="12">
        <v-card class="mx-auto">
            <v-toolbar color="indigo" dark>
                <v-toolbar-title>ITEM</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-container fluid>
                <v-row dense>
                    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card>
                        <v-img
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>
                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-col>
</template>
<script>
export default {
    data: () => ({
        cards: [
        {
            title: "Favorite road trips",
            src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            flex: 12
        },
        ]
    })
};
</script>