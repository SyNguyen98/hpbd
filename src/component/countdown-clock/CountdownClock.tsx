import "./CountdownClock.scss";
import {useEffect, useState} from 'react';

function CountdownClock({startDate}: { startDate: string }) {
    // State to hold the calculated time elapsed (years, days, hours, minutes, seconds)
    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Effect hook to set up and clear the interval for updating the time
    useEffect(() => {
        // Parse the start date string into a Date object.
        // The Date object internally stores time as milliseconds since epoch (UTC).
        const startDateTime = new Date(startDate);

        // Function to calculate the time elapsed from the start date to the current time
        const calculateTime = () => {
            // Get the current time as a Date object. Its getTime() method returns UTC milliseconds.
            const now = new Date();

            // If the start date is in the future, display all zeros and stop.
            if (now.getTime() < startDateTime.getTime()) {
                setTimeElapsed({years: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
                return;
            }

            // --- Calculate Years ---
            // Get UTC components for accurate comparison, independent of local timezone
            const startYearUtc = startDateTime.getUTCFullYear();
            const startMonthUtc = startDateTime.getUTCMonth();
            const startDayUtc = startDateTime.getUTCDate();
            const startHoursUtc = startDateTime.getUTCHours();
            const startMinutesUtc = startDateTime.getUTCMinutes();
            const startSecondsUtc = startDateTime.getUTCSeconds();

            const nowYearUtc = now.getUTCFullYear();
            const nowMonthUtc = now.getUTCMonth();
            const nowDayUtc = now.getUTCDate();
            const nowHoursUtc = now.getUTCHours();
            const nowMinutesUtc = now.getUTCMinutes();
            const nowSecondsUtc = now.getUTCSeconds();

            let years = nowYearUtc - startYearUtc;

            // Adjust years if the current UTC date/time is before the start UTC date/time's anniversary
            if (nowMonthUtc < startMonthUtc ||
                (nowMonthUtc === startMonthUtc && nowDayUtc < startDayUtc) ||
                (nowMonthUtc === startMonthUtc && nowDayUtc === startDayUtc && nowHoursUtc < startHoursUtc) ||
                (nowMonthUtc === startMonthUtc && nowDayUtc === startDayUtc && nowHoursUtc === startHoursUtc && nowMinutesUtc < startMinutesUtc) ||
                (nowMonthUtc === startMonthUtc && nowDayUtc === startDayUtc && nowHoursUtc === startHoursUtc && nowMinutesUtc === startMinutesUtc && nowSecondsUtc < startSecondsUtc)) {
                years--;
            }

            // --- Calculate Remaining Difference after Years ---
            // Create a Date object representing the moment 'years' after the start date, in UTC.
            const dateAfterYears = new Date(Date.UTC(
                startYearUtc + years,
                startMonthUtc,
                startDayUtc,
                startHoursUtc,
                startMinutesUtc,
                startSecondsUtc
            ));

            // The remaining difference in milliseconds is from 'dateAfterYears' to 'now'.
            let remainingDifferenceMs = now.getTime() - dateAfterYears.getTime();

            // Ensure remainingDifferenceMs is not negative due to slight timing discrepancies
            if (remainingDifferenceMs < 0) {
                remainingDifferenceMs = 0;
            }

            // --- Calculate Days, Hours, Minutes, Seconds from remainingDifferenceMs ---
            const days = Math.floor(remainingDifferenceMs / (1000 * 60 * 60 * 24));
            remainingDifferenceMs %= (1000 * 60 * 60 * 24); // Update remaining milliseconds

            const hours = Math.floor(remainingDifferenceMs / (1000 * 60 * 60));
            remainingDifferenceMs %= (1000 * 60 * 60); // Update remaining milliseconds

            const minutes = Math.floor(remainingDifferenceMs / (1000 * 60));
            remainingDifferenceMs %= (1000 * 60); // Update remaining milliseconds

            const seconds = Math.floor(remainingDifferenceMs / 1000);

            // Update the state with the new calculated values
            setTimeElapsed({years, days, hours, minutes, seconds});
        };

        // Call calculateTime immediately to set the initial values
        calculateTime();

        // Set an interval to update the time every second (1000 milliseconds)
        const interval = setInterval(calculateTime, 1000);

        // Cleanup function: This runs when the component unmounts or before the effect re-runs
        // It clears the interval to prevent memory leaks
        return () => clearInterval(interval);
    }, [startDate]); // Re-run effect if startDate prop changes

    // Helper function to format numbers with leading zeros if less than 10
    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="countdown-card">
            <h1 className="countdown-title">
                Tuổi
            </h1>
            <div className="time-grid">
                {/* Years display */}
                <div className="time-unit years">
                    <span className="time-value">
                        {timeElapsed.years}
                    </span>
                    <span className="time-label">
                        Năm
                    </span>
                </div>
                {/* Days display */}
                <div className="time-unit days">
                    <span className="time-value">
                        {timeElapsed.days}
                    </span>
                    <span className="time-label">
                        Ngày
                    </span>
                </div>
                {/* Hours display */}
                <div className="time-unit hours">
                    <span className="time-value">
                        {formatNumber(timeElapsed.hours)}
                    </span>
                    <span className="time-label">
                        Giờ
                    </span>
                </div>
                {/* Minutes display */}
                <div className="time-unit minutes">
                    <span className="time-value">
                        {formatNumber(timeElapsed.minutes)}
                    </span>
                    <span className="time-label">
                        Phút
                    </span>
                </div>
                {/* Seconds display */}
                <div className="time-unit seconds seconds-span">
                    <span className="time-value">
                        {formatNumber(timeElapsed.seconds)}
                    </span>
                    <span className="time-label">
                        Giây
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CountdownClock;