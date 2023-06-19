import { ChevronDownIcon } from '@heroicons/react/20/solid'

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Example() {
  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid ">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Họ
                      </label>
                      <input
                        type="text"
                        name="FirstName"
                        id="FirstName"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="LastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tên
                      </label>
                      <input
                        type="text"
                        name="LastName"
                        id="LastName"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="DateOfBirth"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        name="DateOfBirth"
                        id="DateOfBirth"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="ID"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mã số NV
                      </label>
                      <input
                        type="number"
                        name="ID"
                        id="ID"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="Block"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Khối
                      </label>
                      <input
                        type="text"
                        name="Block"
                        id="Block"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="MarryStatus"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tình trạng hôn nhân
                      </label>
                      <input
                        type="text"
                        name="MarryStatus"
                        id="MarryStatus"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="dateIn"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ngày vào làm việc
                      </label>
                      <input
                        type="text"
                        name="dateIn"
                        id="dateIn"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="room"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phòng ban
                      </label>
                      <input
                        type="text"
                        name="room"
                        id="room"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="workingLocation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nơi làm việc
                      </label>
                      <input
                        type="text"
                        name="workingLocation"
                        id="workingLocation"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="partition"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bộ phận
                      </label>
                      <input
                        type="text"
                        name="partition"
                        id="partition"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tỉnh thành làm việc
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cấp bậc
                      </label>
                      <input
                        type="text"
                        name="position"
                        id="position"
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
                    Tìm kiếm
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

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          ID NV
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <a href="#" className="group inline-flex">
                          Mã NV
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <a href="#" className="group inline-flex">
                          Họ lót
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          Tên
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          Giới tính
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          Nơi check in
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          Ngày
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          Giờ
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a href="#" className="group inline-flex">
                          Trạng thái nhân sự
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        <a href="#" className="group inline-flex">
                          Action
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon
                              className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* i will fix this later}
                    {/* {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.role}
                        </td>
                        
                      </tr>
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
  );
}
