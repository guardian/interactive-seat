export default function isGuardianAndroidApp() {
    return (window.location.origin === "file://") ? true : false;
}
