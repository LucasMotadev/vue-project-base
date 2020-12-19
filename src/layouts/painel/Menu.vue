<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <template v-for="(child, i) in item.children">
              <v-list-item
                :key="i"
                :to="child.to"
              >
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text  }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <template v-else>

            <v-list-item
             
              :key="item.text"
              :to="item.to"
            >
              <v-list-item-action>
                <v-icon :color="item.cor">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <router-view />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'Menu',

  data: () => ({
    drawer: true,
    dialog: false,
    items: [
      {
        icon: 'mdi-calendar-month-outline',
        text: 'Agenda',
        to: '/',
        cor: '#AB47BC',
        permission: [1105]
      },
      {
        icon: 'mdi-chart-areaspline',
        text: 'Dashboard',
        to: '/dashboard/grupo',
        cor: 'green',
        permission: [5001, 5003, 5004, 6002]
      },
      {
        icon: 'mdi-upload',
        text: 'Sisfin',
        to: '/sisfin',
        permission: [1001, 1101, 1102, 1103, 1104, 1202]
        // cor: 'green',

      },
      {
        icon: 'mdi-file-upload',
        text: 'Fatura',
        to: '/faturas',
        permission: [1201, 1301, 1302, 1401, 1403]
      },


      {
        icon: 'mdi-phone',
        text: 'Linhas',
        to: '/linhas',
        permission: [9001, 9002]
      },

      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Emails',
        model: false,
        permission: [2000],
        children: [
          { icon: 'mdi-send', text: 'Gasto Empresa-Vale', to: '/email/gasto/empresa', permission: [2001, 4002, 4005, 4004] },
        ],

      },

      {
        icon: 'mdi-message',
        text: 'Send feedback'
      },
      {
        icon: 'mdi-help-circle',
        text: 'Help',
        cor: 'blue'
      },

    ],
  }),

}

</script>