import React from "react";
import { useSpring, animated } from 'react-spring';
import '../Styles/spin.scss';

function Spin() {
    const styles = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },

    })

    return (
        <animated.div className="spin"
            style={{
                backgroundColor: '#46e891',
                borderRadius: 16,
                ...styles,
            }}
        />
    )
}

export default Spin;

