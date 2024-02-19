import React from 'react';
import styled from 'styled-components';

const ScrollDiv = styled.div`
    overflow-y: scroll;
    border: 1px solid black;
    height: 800px;
    msOverflowStyle: none; /* IE and Edge */
    scrollbarWidth: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;

const Scroll = (props) => {
    return (
        <ScrollDiv>
            {props.children}
        </ScrollDiv>
    );
};

export default Scroll;
