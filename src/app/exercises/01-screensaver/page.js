import Link from 'next/link';
import React from 'react';

function ScreenSaverExercise() {
    return (
        <main className='screen-saver-color-wrapper'>
            <h1>Choose your color:</h1>
            <ul>
                {['red', 'blue', 'cyan', 'hotpink', 'magenta'].map(color => {
                    return (
                        <li key={color}>
                            <Link href={`/exercises/01-screensaver/${color}`}>
                                {color}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default ScreenSaverExercise;
