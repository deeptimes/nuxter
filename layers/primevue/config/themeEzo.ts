import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const MyPreset = definePreset(Aura, {
  semantic: {
    formField: {
      borderRadius: '8px',
    },
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    colorScheme: {
      dark: {
        primary: {
          color: '{blue.600}',
          contrastColor: '{surface.100}',
          inverseColor: '{blue.950}',
          hoverColor: '{blue.700}',
          activeColor: '{blue.500}',
        },
        formField: {
          // color: '{blue.700}',
          background: '{zinc.800}',
          disabledBackground: '{zinc.800}',
          hoverBorderColor: '{primary.color}',
          filledHoverBackground: '{zinc.900}',
          filledFocusBackground: '{zinc.900}',
        },
      },
    },
  },
  components: {
    panel: {
      borderRadius: '16px',
      colorScheme: {
        dark: {
          borderColor: '{zinc.800}',
        },
      },
    },

    button: {
      borderRadius: '8px',
      colorScheme: {
        dark: {
          root: {
            background: '{blue.800}',
          },
        },
      },
    },
    menubar: {
      root: {
        background: '{}',
        borderColor: 'transparent',
      },
    },
    menu: {
      root: {
        background: '{}',
        borderColor: 'transparent',
      },
    },
    inputtext: {},
  },
})

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: '.dark',
    cssLayer: {
      name: 'primevue',
      order: 'ezo-reset,preflights,primevue,ezo-base,icons,typography,shortcuts,default',
    },
  },
}
