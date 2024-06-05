import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const footerSectionDiv = "flex flex-col gap-2 p-2 text-white"
const footerSectionTitle = "text-xl font-bold"
const footerSectionUl = "flex flex-col gap-2"

export function Footer() {
    return (<>
    <div className="divider mb-[-20px]" />
        <div className="flex sm:flex-row flex-col align-center sm:gap-5 justify-center pt-3 sm:justify-around sm:pt-5 bg-red-600 text-white pb-2">
            <span className="flex-1 flex items-center text-xl gap-2 justify-center"><FaPhoneAlt /> +91 94677-78159</span>
            <span className="flex-1 flex items-center text-xl gap-2 justify-center"><FaEnvelope /> support@hostingprovider.co.in</span>
        </div>
        <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row justify-center align-center w-full h-fit">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 max-w-[1200px] w-full">
                    <div className={footerSectionDiv}>
                        <span className={footerSectionTitle}>Shared Licenses</span>
                            <ul className={footerSectionUl}>
                                <Link href="/SharedCPanelLicense"><li>Shared cPanel License</li></Link>
                                <Link href="/SharedImunify360License"><li>Shared Imunify360 License</li></Link>
                                <Link href="/SharedLiteSpeedLicense"><li>Shared LiteSpeed License</li></Link>
                                <Link href="/SharedCloudLinuxLicense"><li>Shared CLoudLinux License</li></Link>
                                <Link href="/SharedPleskLicense"><li>Shared Plesk License</li></Link>
                                <Link href="/SharedAddonLicense"><li>Shared Addon License</li></Link>
                            </ul>
                    </div>
                    <div className={footerSectionDiv}>
                        <span className={footerSectionTitle}>WHMCS Modules</span>
                            <ul className={footerSectionUl}>
                                <Link href="/PhonPeWHMCSModule"><li>PhonPe WHMCS Module</li></Link>
                                <Link href="/HetznerCloudModule"><li>Hetzner Cloud Module</li></Link>
                                <Link href="/HetznerServerModule"><li>Hetzner Server Module</li></Link>
                                <Link href="/OVHCloudModule"><li>OVH Cloud Module</li></Link>
                                <Link href="/OVHServerModule"><li>OVH Server Module</li></Link>
                                <Link href="/VerifyLicense"><li>Verify License</li></Link>
                            </ul>
                    </div>
                    <div className={footerSectionDiv}>
                        <span className={footerSectionTitle}>Hosting Services</span>
                            <ul className={footerSectionUl}>
                                <Link href="/SharedHosting"><li>Shared Hosting</li></Link>
                                <Link href="/ResellerHosting"><li>Reseller Hosting</li></Link>
                                <Link href="/VpsServers"><li>VPS Servers</li></Link>
                                <Link href="/DedicatedServer"><li>Dedicated Server</li></Link>
                                <Link href="/ManagedHostingServer"><li>Managed Hosting Server</li></Link>
                                <Link href="/ServerSetupSolution"><li>Server Setup Solution</li></Link>
                            </ul>
                    </div>
                    <div className={footerSectionDiv}>
                        <span className={footerSectionTitle}>Information</span>
                        <span>
                            <ul className={footerSectionUl}>
                                <Link href="/ServerStatus"><li>Server Status</li></Link>
                                <Link href="/PaymentMethod"><li>Payment Method</li></Link>
                                <Link href="/Reviews"><li>Reviews</li></Link>
                            </ul>
                        </span>
                        <span className={footerSectionTitle}>Legal Docs</span>
                        <span>
                            <ul className={footerSectionUl}>
                                <Link href="/Privacy"><li>Privacy Policy</li></Link>
                                <Link href="/Terms"><li>Terms of Service</li></Link>
                                <Link href="/Refund"><li>Refund Policy</li></Link>
                            </ul>
                        </span>
                    </div>
                    <div className={footerSectionDiv}>
                        <span className={footerSectionTitle}>Company</span>
                        <span>
                            <ul className={footerSectionUl}>
                                <Link href="/AboutUs"><li>About us</li></Link>
                            </ul>
                        </span>
                        <span className={footerSectionTitle}>Need Help?</span>
                        <span>
                            <ul className={footerSectionUl}>
                                <Link href="/Contact"><li>Contact</li></Link>
                                <Link href="/OpenTicket"><li>Open Ticket</li></Link>
                                <Link href="/Tutorials"><li>Tutorials</li></Link>
                                <Link href="/ReportAbuse"><li>Report Abuse</li></Link>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full border-b border-gray-200" />
                <div className="flex flex-row justify-center align-center w-full ">
                <div className="flex flex-col md:flex-row justify-center md:justify-between align-center w-full h-fit max-w-[1200px] text-white">
                    <div className="md:p-2 text-center">© 2023-2024 Hosting Provider - India&apos;s Best Hosting solution provider.</div>
                    <div className="md:p-2 text-center">Prices are listed without GST</div>
                </div>
                </div>
        </div>
    </>
    )
}