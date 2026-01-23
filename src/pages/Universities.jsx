import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { Search, Download, Filter, CheckCircle } from 'lucide-react';

const UNIVERSITIES_DATA = [
    {
        id: 1,
        name: "Bashkir State Medical University",
        country: "Russia",
        tuition: "₹ 3,50,000 / year",
        recognition: "WHO, NMC, ECFMG",
        duration: "6 Years",
        language: "English",
        ranking: "Top 10 in Russia"
    },
    {
        id: 2,
        name: "Tashkent Medical Academy",
        country: "Uzbekistan",
        tuition: "₹ 3,20,000 / year",
        recognition: "WHO, NMC",
        duration: "5+1 Years",
        language: "English",
        ranking: "Top 3 in Uzbekistan"
    },
    {
        id: 3,
        name: "Kazakh National Medical University",
        country: "Kazakhstan",
        tuition: "₹ 4,00,000 / year",
        recognition: "WHO, NMC, FAIMER",
        duration: "5 Years",
        language: "English",
        ranking: "#1 in Kazakhstan"
    },
    {
        id: 4,
        name: "Orel State Medical University",
        country: "Russia",
        tuition: "₹ 3,00,000 / year",
        recognition: "WHO, NMC",
        duration: "6 Years",
        language: "English",
        ranking: "Grade A University"
    },
    {
        id: 5,
        name: "Samarkand State Medical Institute",
        country: "Uzbekistan",
        tuition: "₹ 3,10,000 / year",
        recognition: "WHO, NMC",
        duration: "5+1 Years",
        language: "English",
        ranking: "Centuries old heritage"
    },
];

const Universities = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("All");

    const filteredUniversities = UNIVERSITIES_DATA.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCountry = selectedCountry === "All" || uni.country === selectedCountry;
        return matchesSearch && matchesCountry;
    });

    const countries = ["All", ...new Set(UNIVERSITIES_DATA.map(u => u.country))];

    return (
        <>
            <SEO
                title="Top Medical Universities Abroad | Agrim Education"
                description="List of top MCI/WHO approved medical universities in Russia, Uzbekistan, Kazakhstan for Indian students. Compare fees and ranking."
            />
            <div className="bg-neutral-light min-h-screen py-12">
                <div className="container-custom">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Top Medical Universities</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore recognized universities offering world-class medical education at affordable tuition fees.</p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search university..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {countries.map(country => (
                                <button
                                    key={country}
                                    onClick={() => setSelectedCountry(country)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCountry === country ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Table / List */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-gray-700">University Name</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Country</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Tuition Fee (Approx)</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Duration</th>
                                        <th className="px-6 py-4 font-semibold text-gray-700">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredUniversities.length > 0 ? filteredUniversities.map(uni => (
                                        <tr key={uni.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-primary">{uni.name}</div>
                                                <div className="text-xs text-gray-500 mt-1 flex gap-2">
                                                    <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-500" /> {uni.recognition}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{uni.country}</td>
                                            <td className="px-6 py-4 font-medium text-gray-900">{uni.tuition}</td>
                                            <td className="px-6 py-4 text-gray-600">{uni.duration}</td>
                                            <td className="px-6 py-4">
                                                <Button variant="outline" size="sm" className="text-xs px-3 py-1.5 h-auto">View Details</Button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                                No universities found matching your criteria.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 bg-primary text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Download Fee Structure PDF</h3>
                            <p className="text-blue-100">Get detailed fee breakdown, hostel charges, and food expenses for all universities.</p>
                        </div>
                        <div className="relative z-10">
                            <Button variant="secondary" icon={<Download size={20} />}>Download Now</Button>
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Universities;
