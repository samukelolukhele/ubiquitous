export const anim = {
    scaleUp : {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            scale: 0
        }
    },
    modalButton: {
        visible:{
            backgroundColor: ['#000', '#fff'],
            transition: {
                type: 'tween',
                ease: 'circIn',
                duration: 1,
            }
        },
        exit:{
            backgroundColor: ['#fff', '#000'],
            transition: { ease: 'easeOut' }
        },
    }
}