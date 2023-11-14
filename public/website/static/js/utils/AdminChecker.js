export const isAdmin = () => {
    let profile = localStorage.getItem("profile");
    let admins = [
        "01618183828",
        "01829177104",
        "01911131345",
        "01614390717",
        "01301893214",
        "01921502336",
        "01841079978",
        "01673870181",
        "01708668501",
        "01887709461",
        "01734045633",
        "01741811825",
        "01515245134",
        "01751882789",
        "01760510109",
        "01403218681",
        "01632747534",
        "01687104271",
        "01810198709",
        "01753530311",
        "01852231839",
        "01922874439",
        "01954243412",
        "01716788029",
        "01810198712",
        "01810198708",
        "01810198703",
        "01810198706",
        "01614290917",
        "01941157142",
    ];

    if (profile) {
        let jsonProfile = JSON.parse(profile);
        let phone = jsonProfile.phone;

        if (admins.indexOf(phone) >= 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};