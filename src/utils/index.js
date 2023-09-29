export const catchErrors = (e) => {

    //We can add here some toast message, and show notification errors (https://vue-toastification.maronato.dev/)

    // if (e?.message) return toast.error(e.message);
    // return toast.error('Something went wrong')

    return e?.message
}