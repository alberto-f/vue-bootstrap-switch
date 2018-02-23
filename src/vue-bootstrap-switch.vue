
<template>
	<input type="checkbox">
</template>
	
<script>

import 'jquery'

export default {
	props: ['options','value'],
  	data: function(){
  		return {
  			_bootstrapSwitchDom: null
  		}
  	},
  	mounted: function(){
  		$(this.$el).on('switchChange.bootstrapSwitch', (event, state) => {
  			// We MUST emit 'input' event to make v-model update
  			// https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
  			this.$emit('input', state)
  		})

  		this.$nextTick(function(){
	  		this.render()
	  		// Note: Reference to bootstrap-switch-wrapper.
			  //       It is needed when destroying component.
				this._boostrapSwitchDom = $(this.$el).closest('.bootstrap-switch-wrapper')
  		})
  		
  	},
  	beforeDestroy: function(){
  		// Important:
	    //
	    //   When beforeDestroy is called, this.$el has already being de-attached from
	    //     the dom tree. It has no siblings and no parents.
	    //
	    //   This means that when boostrapSwitch('destroy') is called, it cannot
	    //     properly do the HTML clean-up.
	    //
	    //   We use a reference to the DOM node containing bootstrap-switch changes and remove it all.
	    //
  		$(this.$el).bootstrapSwitch('destroy')
  		$(this._boostrapSwitchDom).remove()
  	},
  	methods: {
  		render: function(){
  			const opts = Object.assign({}, {state: this.value}, this.options)
  			$(this.$el).bootstrapSwitch(opts)
  		},
  		refresh: function(state){
  			$(this.$el).bootstrapSwitch('state', state)	
  		}
  	},
  	watch: {
  		// Watch changes on value or opts from outside component.
  		// Using v-model we have a 
  		//
  		//		<component 
  		// 			v-bind:value = "state"
  		//			v-on:input = "state = $event.target.value">
  		//		</component>
  		//
  		//
  		// Updates that happen from outside and modify the v-model are catched with this value.
  		//
  		// ref: https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
  		//
  		value: function(value){
  			this.refresh(value)
  		}
  	}
}
</script>