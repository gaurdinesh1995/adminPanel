/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
const options = {
    ajax: true,

    events: {
        // before ajax loading click. Return true to prevent ajax loading
        // [event]
        onBeforeAjax() {
            return false;
        },

        // after ajax page loaded
        // [href, $newHTML]
        onAfterAjax() {
        },
    },
};

export { options };
