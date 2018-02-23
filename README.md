# vue-bootstrap-switch

(under development)

A Vue wrapper component for [bootstrap-switch](https://github.com/Bttstrp/bootstrap-switch)

## Installation

Unfortunately I have not published yet on npm. Only solution so far it is towrap the version that exists on `/dist` folder. My apologies for it.


## Usage

This is a Vue wrapper for `bootstrap-switch`. As such it requires all the libraries that `bootstrap-switch` depends on:
jquery: https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
bootstrap js: https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
bootstrap css: https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
bootstrap-switch js: https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.3.4/js/bootstrap-switch.js
bootstrap-switch css: https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.3.4/css/bootstrap3/bootstrap-switch.css

Plus Vue js: https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js



Import the library in the browser.

```shell
<script type="text/javascript" src="./vue-bootstrap-switch.js"></script>
```

Install the component using `Vue.use(VueBootstrapSwitch)`.
Set the params for it. It supports most of the params defined in [bootstrap-switch](https://github.com/Bttstrp/bootstrap-switch).


```shell
<!-- Vue Component -->
<div id="app">
	<vue-bootstrap-switch
		v-model="opts.state"
		:options="opts"></vue-bootstrap-switch>
</div>

<script type="text/javascript">
	// create a root instance
	const data = {
		opts: {
			state: true,
			size: null,
			animate: true,
			disabled: false,
			readonly: false,
			indeterminate: false,
			inverse: false,
			radioAllOff: false,
			onColor: 'success',
			offColor: 'danger',
			onText: 'ON',
			offText: 'OFF',
			labelText: '&nbsp;',
			handleWidth: 'auto',
			labelWidth: 'auto',
			baseClass: 'bootstrap-switch',
			wrapperClass: 'wrapper',
			onInit: function(){
				console.log('init')
			},
			onSwitchChange: function(){
				console.log('switch')
			}
		}
	}
	Vue.use(VueBootstrapSwitch)
	var app = new Vue({
	  el: '#app',
	  data: data
	})

</script>
```

There is an example of how to use it on the `example`.


## Options

It should support most of the params defined in [bootstrap-switch](https://github.com/Bttstrp/bootstrap-switch).

```shell
	state: true,
	size: null,
	animate: true,
	disabled: false,
	readonly: false,
	indeterminate: false,
	inverse: false,
	radioAllOff: false,
	onColor: 'success',
	offColor: 'danger',
	onText: 'ON',
	offText: 'OFF',
	labelText: '&nbsp;',
	handleWidth: 'auto',
	labelWidth: 'auto',
	baseClass: 'bootstrap-switch',
	wrapperClass: 'wrapper',
	onInit: function(){
		console.log('init')
	},
	onSwitchChange: function(){
		console.log('switch')
	}
```

## License
MIT

