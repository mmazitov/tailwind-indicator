<h1 align="center">Tailwind Breakpoint Indicator</h1>

## 🎯 About 
TailwindIndicator is a React component designed to visually display the currently active Tailwind CSS breakpoint. It is intended for development purposes only and helps developers quickly identify the viewport size class (e.g., xs, sm, md, etc.) as defined by Tailwind CSS.

## ✨ Features
- Displays the current active Tailwind CSS breakpoint as a small badge in the top-left corner of the screen.
- Only renders in non-production environments (based on NODE_ENV).
- Dynamically updates as the viewport size changes, showing breakpoints like ``xs``, ``sm``, ``md``, ``lg``, ``xl``, and ``2xl``.

## 🏁 Installation
1) Add the ``TailwindIndicator`` component to your project:

		import TailwindIndicator from './TailwindIndicator';

2) Include the component in your application layout or root file (e.g., ``App.js`` or ``index.js``):
   
		const App = () => (
			<div>
				<TailwindIndicator />
				{/* Other components */}
			</div>
		);

3) Ensure you have Tailwind CSS set up in your project. If not, follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).
   
## Usage

<h3>Development Mode</h3>
The <code>TailwindIndicator</code> component will automatically appear in development mode (<code>NODE_ENV !== 'production'</code>). It shows the active breakpoint dynamically in the following format:

- <code>xs</code>: Extra small screens
- <code>sm</code>: Small screens
- <code>md</code>: Medium screens
- <code>lg</code>: Large screens
- <code>xl</code>: Extra large screens
- <code>2xl</code>: Extra extra large screens

<h3>Production Mode</h3>
The component automatically returns <code>null</code> in production mode (<code>NODE_ENV === 'production'</code>) to avoid unnecessary rendering in live environments.


## 🤝 Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.
