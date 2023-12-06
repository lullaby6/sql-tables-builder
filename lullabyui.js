document.head.innerHTML += `
    <style type="text/tailwindcss">
        @layer components {
            .scrollbar::-webkit-scrollbar {
                @apply w-4;
            }

            .scrollbar::-webkit-scrollbar-thumb{
                @apply bg-neutral-800;
                border: 4px solid transparent;
                background-clip: padding-box;
                border-radius: 9999px;
            }

            .scrollbar::-webkit-scrollbar-track {
                @apply bg-white;
            }

            .dark-scrollbar::-webkit-scrollbar {
                @apply w-4;
            }

            .dark {
                @apply bg-neutral-900 text-neutral-50;
            }

            .dark-scrollbar::-webkit-scrollbar-thumb{
                @apply bg-neutral-100;
                border: 5px solid transparent;
                background-clip: padding-box;
                border-radius: 9999px;
            }

            .dark-scrollbar::-webkit-scrollbar-track {
                @apply bg-neutral-900;
            }

            .button {
                @apply text-neutral-600 font-semibold bg-neutral-100 border border-neutral-300 rounded px-4 py-1 shadow hover:shadow-md hover:bg-neutral-200 hover:text-neutral-700 h-fit w-fit;
            }

            .dark-button {
                @apply text-neutral-50 font-semibold bg-neutral-900 border border-neutral-600 rounded px-4 py-1 shadow hover:shadow-md hover:bg-neutral-800 h-fit w-fit;
            }

            .link {
                @apply text-neutral-800 cursor-pointer relative h-fit w-fit;
            }

            .link:before {
                @apply bg-neutral-800;
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0%;
                height: 1px;
                transition: width .2s ease-in-out;
            }

            .link:hover:before {
                width: 100%;
            }

            .dark-link {
                @apply text-neutral-50 cursor-pointer relative h-fit w-fit;
            }

            .dark-link:before {
                @apply bg-neutral-50;
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0%;
                height: 1px;
                transition: width .2s ease-in-out;
            }

            .dark-link:hover:before {
                width: 100%;
            }

            .badget {
                @apply text-neutral-600 text-sm font-semibold bg-neutral-100 border border-neutral-300 rounded-full px-2 shadow hover:bg-neutral-200 hover:text-neutral-700 hover:shadow-md h-fit w-fit;
            }

            .dark-badget {
                @apply text-neutral-50 text-sm font-semibold bg-neutral-900 border border-neutral-600 rounded-full px-2 shadow hover:bg-neutral-700 hover:shadow-md h-fit w-fit;
            }

            .title {
                @apply text-neutral-800 text-3xl font-semibold;
            }

            .dark-title {
                @apply text-neutral-50 text-3xl font-semibold;
            }

            .modal-container {
                @apply w-screen h-screen fixed left-0 top-0 flex justify-center items-center z-10;
            }

            .modal-overlay {
                @apply w-full h-full bg-black absolute left-0 top-0 opacity-25 z-10;
            }

            .modal-content {
                @apply text-neutral-700 bg-white rounded z-10 p-6 shadow;
            }

            .dark-modal-content {
                @apply text-neutral-50 bg-neutral-900 rounded z-10 p-6 shadow border border-neutral-600;
            }

            .card {
                @apply text-neutral-700 flex flex-col gap-4 p-6 shadow border border-neutral-300 rounded shadow;
            }

            .card-header {
                @apply flex flex-col w-full;
            }

            .card-title {
                @apply text-2xl font-semibold text-neutral-800;
            }

            .card-desc {
                @apply text-neutral-600;
            }

            .card-content {
                @apply w-full;
            }

            .card-footer {
                @apply flex w-full;
            }

            .dark-card {
                @apply bg-neutral-900 text-neutral-100 flex flex-col gap-4 p-6 shadow border border-neutral-600 rounded shadow;
            }

            .dark-card-title {
                @apply text-2xl font-semibold text-neutral-50;
            }

            .dark-card-desc {
                @apply text-neutral-400;
            }
        }
    </style>
`

window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelectorAll('.modal');
    modal.forEach(modal => {
        modal.setAttribute('x-data', "{ show_modal: false }");

        const modalOpen = modal.querySelectorAll('.modal-open');
        modalOpen.forEach(modalOpen => {
            modalOpen.setAttribute('x-on:click', "show_modal = true");
        })

        const modalClose = modal.querySelectorAll('.modal-close');
        modalClose.forEach(modalClose => {
            modalClose.setAttribute('x-on:click', "show_modal = false");
        })

        const modalContainer = modal.querySelector('.modal-container');
        if (modalContainer) {
            modalContainer.setAttribute("x-show", "show_modal")
            modalContainer.setAttribute("x-transition.opacity", "")
        }
    })
})