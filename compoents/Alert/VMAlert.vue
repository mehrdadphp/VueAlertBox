<template>
    <div :class="classes">
        <i v-if="warning" class="fa fa-exclamation"></i>
        <i v-if="success" class="fa fa-check-circle"></i>
        <i v-if="error" class="fa fa-exclamation-triangle"></i>
        <i v-if="info" class="fa fa-exclamation-circle"></i>

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VMAlert',
    props: {
      success: {
        default: false,
        type: Boolean
      },
      info: {
        default: false,
        type: Boolean
      },
      warning: {
        default: false,
        type: Boolean
      },
      error: {
        default: false,
        type: Boolean
      },
    },
    computed: {
      classes() {
        let {
          success,
          error,
          info,
          warning
        } = this;

        return {
          'alert': true,
          'alert--success': success,
          'alert--error': error,
          'alert--info': info,
          'alert--warning': warning,
        }

      }
    }
  }
</script>
