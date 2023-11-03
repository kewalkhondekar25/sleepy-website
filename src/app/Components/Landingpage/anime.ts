export const effect1 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 0.5}
    },
    close:{
        opacity:0
    }
}

export const effect2 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 0.8}
    },
    close:{
        opacity:0
    }
}

export const effect3 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 1, ease:[0.25, 1, 0.5, 1]}
    },
    close:{
        opacity:0
    }
}

export const effect4 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 1.5, ease:[0.25, 1, 0.5, 1]}
    },
    close:{
        opacity:0
    }
}

export const effect5 = {
    initial:{
        x:"100%",
        opacity:0
    },
    open:{
        x:"0%",
        opacity:1,
        transition:{duration:1.5, delay: 0.5,  ease:[0.25, 1, 0.5, 1] }
    },
    exit:{
        opacity:1
    }
}

export const effect6 = {
    initial:{
        x:"-100%",
        opacity:0
    },
    open:{
        x:"0%",
        opacity:1,
        transition:{duration:1.5,delay: 0.5,  ease:[0.25, 1, 0.5, 1] }
    },
    exit:{
        opacity:1
    }
}