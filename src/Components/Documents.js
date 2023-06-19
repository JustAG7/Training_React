/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <>
      <div></div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className=" ">
          <div className="mt-5  md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="DateOfCheck"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ngày chi
                      </label>
                      <input
                        type="date"
                        name="DateOfCheck"
                        id="DateOfCheck"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="numberChecks"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Số phiếu
                      </label>
                      <input
                        type="number"
                        name="numberChecks"
                        id="numberChecks"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="monthOfCheck"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ghi nhận tháng
                      </label>
                      <input
                        type="number"
                        name="monthOfCheck"
                        id="monthOfCheck"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="IDUnit"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mã đơn vị chi
                      </label>
                      <input
                        type="number"
                        name="IDUnit"
                        id="IDUnit"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="reason"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Lí do
                      </label>
                      <input
                        type="text"
                        name="reason"
                        id="reason"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="money"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Số tiền
                      </label>
                      <input
                        type="number"
                        name="money"
                        id="money"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Loại
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"

                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="method"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phương thức
                      </label>
                      <input
                        type="text"
                        name="method"
                        id="method"

                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="note"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ghi chú
                      </label>
                      <textarea
  
                        name="note"
                        id="note"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                  <button
                    type="cancel"
                    className="inline-flex justify-center rounded-md border border-transparent bg-white-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
