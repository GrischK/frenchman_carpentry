declare module '../animations' {
    export const animationOne: {
        in: {
            opacity: number;
        };
        out: {
            opacity: number;
        };
    };
}

declare module '../animations' {
    export const transition: {
        duration: number;
    };
}

declare module '../animations' {
    export const animationTextOne: {
        textIn: {
            x: number;
        },
        textOut: {
            opacity: number;
        }
    }
}

declare module '../animations' {
    export const animationTextTwo: {
        textIn: {
            x: number;
        },
        textOut: {
            opacity: number;
        }
    }
}

module.exports = {
    animationOne
};

module.exports = {
    transition
};

module.exports = {
    animationTextOne
};

module.exports = {
    animationTextTwo
};