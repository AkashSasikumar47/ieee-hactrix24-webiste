import React from 'react'

const Mentors = () => {
    return (
        <div>

            {/* Team */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Our leadership
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* End Col */}
                    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                        <div className="flex items-center gap-x-4">
                            <img
                                className="rounded-full w-20 h-20"
                                src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                                alt="Image Description"
                            />
                            <div className="grow">
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    Tom Lowry
                                </h3>
                                <p className="text-xs uppercase text-gray-500">UI/UX Designer</p>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-500">
                            I am an ambitious workaholic, but apart from that, pretty simple
                            person.
                        </p>
                        {/* Social Brands */}
                        <div className="mt-3 space-x-1">
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                </svg>
                            </a>
                        </div>
                        {/* End Social Brands */}
                    </div>
                    {/* End Col */}
                    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                        <div className="flex items-center gap-x-4">
                            <img
                                className="rounded-full w-20 h-20"
                                src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                                alt="Image Description"
                            />
                            <div className="grow">
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    Louise Donadieu
                                </h3>
                                <p className="text-xs uppercase text-gray-500">
                                    Support Consultant
                                </p>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-500">
                            I am an ambitious workaholic, but apart from that, pretty simple
                            person.
                        </p>
                        {/* Social Brands */}
                        <div className="mt-3 space-x-1">
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                </svg>
                            </a>
                        </div>
                        {/* End Social Brands */}
                    </div>
                    {/* End Col */}
                    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                        <div className="flex items-center gap-x-4">
                            <img
                                className="rounded-full w-20 h-20"
                                src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                                alt="Image Description"
                            />
                            <div className="grow">
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    Jeff Fisher
                                </h3>
                                <p className="text-xs uppercase text-gray-500">Project Manager</p>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-500">
                            I am an ambitious workaholic, but apart from that, pretty simple
                            person.
                        </p>
                        {/* Social Brands */}
                        <div className="mt-3 space-x-1">
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <a
                                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                </svg>
                            </a>
                        </div>
                        {/* End Social Brands */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Team */}

        </div >
    )
}

export default Mentors