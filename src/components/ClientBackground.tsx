'use client';

import Hyperspeed from './Hyperspeed';

export default function ClientBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <Hyperspeed
                effectOptions={{
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [1, 2],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.05, 400 * 0.15],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0xffffff,
                        brokenLines: 0xffffff,
                        leftCars: [0xFF8139, 0xFF9747, 0xFFA07A], // Using portfolio orange accents
                        rightCars: [0xFFFFFF, 0xEEEEEE, 0xCCCCCC], // White/Gray for contrast
                        sticks: 0xFF8139
                    }
                }}
            />
        </div>
    );
}
