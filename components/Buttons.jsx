import { Button } from "flowbite-react";

export function OutlineButton(props) {
  const { color, classname, text } = props;    
  return (
    <button 
      type="button" 
      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-10 rounded-full py-2.5 text-center me-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
    >
      {text}
    </button>
  );
}

export function SolidButton (props) {
  const { text } = props;
  return (
    <button class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-blue-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
      {text}
    </button>
  )
}