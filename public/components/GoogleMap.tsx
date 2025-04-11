import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full min-h-[500px] h-[700px] md:h-[500px] sm:h-[400px] rounded-lg shadow-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683566432502!2d80.23359200000002!3d13.056995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f499eee457%3A0x4d3f7e677496e707!2sMeenakshi%20Sundararajan%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709799800000!5m2!1sen!2sin"
        style={{ border: 0 , minHeight: "500px" }}
        width="100%"
        height="100%"
        className="w-full h-full"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Meenakshi Sundararajan Engineering College Location"
        aria-hidden="true"
      />
    </div>
  );
};


export default GoogleMap;