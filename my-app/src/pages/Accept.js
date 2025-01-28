import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import StatusMessage from "../components/StatusMessage";

const Accept = () => {
  const [searchParams] = useSearchParams();
  const fetchUrl = searchParams.get("api_url");

  useEffect(() => {
    const fetchData = async () => {
      if (fetchUrl) {
        try {
          const response = await fetch(fetchUrl);
          if (!response.ok) {
            alert(`Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          alert("Failed to fetch: " + error.message);
        }
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <StatusMessage
      title="Accepted Spot"
      message="Thank you for accepting your spot! 😊"
    />
  );
};

export default Accept;
