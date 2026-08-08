import { createPost } from "@/actions/actions";

export default function Home() {
  return (
    <div
      className="
        w-md
        p-3
        bg-white
        dark:bg-gray-800
        rounded-xl
        shadow-md
        border-gray-100
        dark:border-gray-700"
    >
      <form className="space-y-4" action={createPost}>
        <h3>Create post</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>

          <input
            type="text"
            id="title"
            name="title"
            className="
                w-full
                mt-1
                px-3
                py-2
                border
                rounded-lg
                focus:ring-2
                focus:ring-blue-500
                dark:bg-gray-900
                dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Content
          </label>

          <input
            type="text"
            id="body"
            name="body"
            className="
                w-full
                mt-1
                px-3
                py-2
                border
                rounded-lg
                focus:ring-2
                focus:ring-blue-500
                dark:bg-gray-900
                dark:border-gray-700
                dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
