import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import women from '../../assets/images/women.png'
import drapeau from '../../assets/images/drapeau.png'
import Apple from '../../assets/images/Apple-watch.jpg';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Données wu cartes yi
  // const stats = [
  //   {
  //     title: "Total User",
  //     value: "40,689",
  //     change: "8.5%",
  //     trend: "Up from yesterday",
  //     bgIconColor: "bg-blue-50",
  //     icon: "👤"
  //   },
  //   {
  //     title: "Total Order",
  //     value: "10293",
  //     change: "1.3%",
  //     trend: "Up from past week",
  //     bgIconColor: "bg-yellow-50",
  //     icon: "📦"
  //   },
  //   {
  //     title: "Total Sales",
  //     value: "$89,000",
  //     change: "4.3%",
  //     trend: "Down from yesterday",
  //     bgIconColor: "bg-green-50",
  //     icon: "📈"
  //   },
  //   {
  //     title: "Total Pending",
  //     value: "2040",
  //     change: "1.8%",
  //     trend: "Up from yesterday",
  //     bgIconColor: "bg-red-50",
  //     icon: "⏳"
  //   }
  // ];

  // Données wu graphique yi
  const salesData = [
    { name: '5k', value: 20 },
    { name: '10k', value: 40 },
    { name: '15k', value: 35 },
    { name: '20k', value: 50 },
    { name: '25k', value: 35 },
    { name: '30k', value: 40 },
    { name: '35k', value: 30 },
    { name: '40k', value: 45 },
    { name: '45k', value: 35 },
    { name: '50k', value: 40 },
    { name: '55k', value: 35 },
    { name: '60k', value: 40 }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      <aside
        className={`
        fixed md:static top-0 left-0 z-40 w-64 bg-white h-screen md:h-auto overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}
      >

        <div className="p-6">
          <span className="text-xl font-bold text-blue-600">DashStack</span>
        </div>

        <nav className="px-4">
          <a href="#" className="flex items-center px-4 py-2 mb-1 rounded-lg">
            <span className="mr-3">📊</span>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📦</span>
            Products
          </a>
          <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">❤️</span>
            Favorites
          </a>
          <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📨</span>
            Inbox
          </a>
          <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📝</span>
            Order Lists
          </a>
          <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📈</span>
            Product Stock
          </a>

          <div className="mt-8">
            <span className="px-4 text-xs font-semibold text-gray-500 uppercase">Pages</span>
            <div className="mt-4">
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">💰</span>
                Pricing
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📅</span>
                Calendar
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">✅</span>
                To-Do
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📞</span>
                Contact
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📄</span>
                Invoice
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">✅</span>
                To-Do
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📞</span>
                Contact
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📄</span>
                Invoice
              </a>
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-4">
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">⚙️</span> Settings
              </a>
              <a href="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">🚪</span> Logout
              </a>
            </div>
          </div>
        </nav>
      </aside>

      <button
        className="fixed left-2 z-50 md:hidden p-2"
        onClick={toggleSidebar}
      >
        <span className="text-3xl">☰</span>
      </button>


      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <main className="flex-1 md:ml-0 w-full">
        <header className="bg-white border-b w-full">
          <div className="flex items-center justify-between px-2 md:px-6 py-2 md:py-4">
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2.5">🔍</span>
              </div>
            </div>

            <div className="flex items-center gap-3 space-x-2 ml-1 md:space-x-6 ml-auto">
              <div className="flex items-center space-x-1 md:space-x-2">
                <img src={drapeau} className="rounded-lg h-6 w-6 md:h-8 md:w-10" alt="English flag" />
                <span className="text-xs md:text-sm text-gray-600">English</span>
              </div>

              <div className="relative inline-block text-blue-500 text-xl md:text-2xl">
                <span role="img" aria-label="notification">🔔</span>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                  6
                </span>
              </div>

              <div className="flex items-center space-x-1 md:space-x-2">
                <img src={women} className="rounded-full h-8 w-8 md:h-10 md:w-10" alt="User avatar" />
                <div className="text-xs md:text-sm">
                  <p className="font-medium">Moni Roy</p>
                  <p className="text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-2 md:p-6 space-y-4 md:space-y-6 w-full">
          <h1 className="text-xl md:text-2xl font-bold pl-2">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 px-2">
      <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-sm">
        <div className="p-3 md:p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-gray-500 text-sm mb-2">Total User</h3>
              <p className="text-xl md:text-2xl font-bold">40,689</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-full">
              <span className="text-xl">👤</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 text-sm">↑ 8.5%</span>
            <span className="text-gray-500 text-sm ml-1">Up from yesterday</span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-sm">
        <div className="p-3 md:p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-gray-500 text-sm mb-2">Total Order</h3>
              <p className="text-xl md:text-2xl font-bold">10293</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-full">
              <span className="text-xl">📦</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 text-sm">↑ 1.3%</span>
            <span className="text-gray-500 text-sm ml-1">Up from past week</span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-sm">
        <div className="p-3 md:p-6">
          <div className="flex justify-between items-start mb-4 ">
            <div>
              <h3 className="text-gray-500 text-sm mb-2">Total Sales</h3>
              <p className="text-xl md:text-2xl font-bold">$89,000</p>
            </div>
            <div className="bg-green-50 p-3 rounded-full">
              <span className="text-xl">📈</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-red-500 text-sm">↓ 4.3%</span>
            <span className="text-gray-500 text-sm ml-1">Down from yesterday</span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3">
        <div className="p-3 md:p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-gray-500 text-sm mb-2">Total Pending</h3>
              <p className="text-xl md:text-2xl font-bold">2040</p>
            </div>
            <div className="bg-red-50 p-3 rounded-full">
              <span className="text-xl">⏳</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 text-sm">↑ 1.8%</span>
            <span className="text-gray-500 text-sm ml-1">Up from yesterday</span>
          </div>
        </div>
      </div>
    </div>


          <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm mx-2">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-lg font-semibold">Sales Details</h2>
              <select className="border rounded-lg px-2 md:px-3 py-1 md:py-2 text-sm">
                <option>October</option>
              </select>
            </div>
            <div className="h-[250px] md:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={{ stroke: '#4F46E5', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm mx-2">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-3 md:p-6">
              <h2 className="text-base md:text-lg font-semibold">Deals Details</h2>
              <select className="border rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm">
                <option>October</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-500">
                      Product Name
                    </th>
                    <th className="text-left px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-500">
                      Location
                    </th>
                    <th className="text-left px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-500">
                      Date - Time
                    </th>
                    <th className="text-left px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-500">
                      Piece
                    </th>
                    <th className="text-left px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-500">
                      Amount
                    </th>
                    <th className="text-left px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={Apple}
                          className="rounded-lg mr-2 md:mr-3 h-5 w-5 md:h-8 md:w-8"
                          alt="Apple Watch"
                        />
                        <span className="text-xs md:text-sm">Apple Watch</span>
                      </div>
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-gray-500 text-xs md:text-sm">
                      6096 Marjolaine Landing
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-gray-500 text-xs md:text-sm">
                      12.09.2019 - 12:53 PM
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-gray-500 text-xs md:text-sm">
                      423
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-gray-500 text-xs md:text-sm">
                      $34,295
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4">
                      <span className="px-2 md:px-3 py-1 bg-[#00B69B] text-white rounded-full text-[10px] md:text-xs">
                        Delivered
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;