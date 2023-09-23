'use client'
import React, { useEffect, useState } from 'react';
import styles from './countDown.module.css';

interface CountdownTimerProps {
    targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    function calculateTimeRemaining(targetDate: string) {
        const now = new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const timeLeft = targetTime - now;

        if (timeLeft <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
            };
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        return {
            days,
            hours,
            minutes,
        };
    }

    return (
        <div className={styles.countdown}>
            <h2>Countdown Timer</h2>
            <div className={styles.timer}>
                <div>
                    <span>{timeRemaining.days}</span>
                    <span>days</span>
                </div>
                <div>
                    <span>{timeRemaining.hours}</span>
                    <span>hours</span>
                </div>
                <div>
                    <span>{timeRemaining.minutes}</span>
                    <span>minutes</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
