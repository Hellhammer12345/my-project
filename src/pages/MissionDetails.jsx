
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MissionDetails = () => {
    const { id } = useParams(); // Get the unique mission id from URL params
    const [missionDetails, setMissionDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMissionDetails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.spacexdata.com/v3/history/${id}`);
            if (!res.ok) {
                throw new Error("Network response wasn't ok");
            }
            const data = await res.json();
            setMissionDetails(data); // Set the details of the specific mission
        } catch (error) {
            console.error("Error fetching mission details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMissionDetails(); // Fetch mission details on mount and when id changes
    }, [id]);

    return (
        <div className="max-w-3xl mx-auto p-4">
            {loading ? (
                <h1 className="text-2xl text-center font-semibold">Loading mission details...</h1>
            ) : (
                missionDetails && (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-blue-600">{missionDetails.title}</h2>
                        <p className="text-lg text-gray-700 mt-4">{missionDetails.details}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default MissionDetails;
