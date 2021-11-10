import UniversalHeader from "../../components/UniversalHeader";
import LegalTextNotice from "../../components/LegalComponents/LegalTextNotice";
import {Link} from "react-router-dom";

const Legal = () => {
    return (
        <>
            <UniversalHeader className="h-24 flex-initial w-screen fixed" />
            <main className={"h-screen w-screen pt-28 pl-12 flex flex-col"}>
                <LegalTextNotice title="Picture Credits - Thanks to the following creators for their images:" className={""}>
                    <p className={"pl-2"}>- <b className={"pl-2"}>Daria Nekipelova</b> from <b>Pexels</b>!</p>
                    <p className={"pl-2"}>- <b className={"pl-2"}>Daria Nekipelova</b> from <b>Pexels</b>!</p>
                    <p className={"pl-2"}>- <b className={"pl-2"}>Daria Nekipelova</b> from <b>Pexels</b>!</p>
                </LegalTextNotice>
                <LegalTextNotice title="Legal Notice regarding use of this platform" className={"legalArticle"}>
                    <p>The information contained in this website is for general information purposes only.
                        The information is provided by [business name] and while we endeavour to keep the information up to date and correct,
                        we make no representations or warranties of any kind, express or implied, about the completeness,
                        accuracy, reliability, suitability or availability with respect to the website or the information,
                        products, services, or related graphics contained on the website for any purpose. Any reliance you place
                        on such information is therefore strictly at your own risk.</p>
                    <p>In no event will we be liable for any loss or damage including without limitation, indirect or
                        consequential loss or damage, or any loss or damage whatsoever arising from loss of data or
                        profits arising out of, or in connection with, the use of this website.</p>
                    <p>Through this website you are able to link to other websites which are not under the control of
                        Howest. We have no control over the nature, content and availability of those sites.
                        The inclusion of any links does not necessarily imply a recommendation or endorse the views
                        expressed within them.</p>
                    <p>
                        Every effort is made to keep the website up and running smoothly. However, Howest takes
                        no responsibility for, and will not be liable for, the website being temporarily unavailable due
                        to technical issues beyond our control.
                    </p>
                </LegalTextNotice>
                <Link to={"/"} className={"text-magenta font-bold"}>Back</Link>
            </main>
        </>

    )
}

export default Legal