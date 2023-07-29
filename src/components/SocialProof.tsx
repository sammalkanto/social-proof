import starIcon from '../assets/icon-star.svg';
import coltonAvatar from '../assets/image-colton.jpg';
import ireneAvatar from '../assets/image-irene.jpg';
import anneAvatar from '../assets/image-anne.jpg';

import bgPatternTopDesktop from '../assets/bg-pattern-top-desktop.svg';
import bgPatternBottomDesktop from '../assets/bg-pattern-bottom-desktop.svg';
import bgPatternTopMobile from '../assets/bg-pattern-top-mobile.svg';
import bgPatternBottomMobile from '../assets/bg-pattern-bottom-mobile.svg';

interface ReviewProps {
    stars: number;
    source: string;
}

function Review({ stars, source }: ReviewProps) {
    function getStarIcons(amount: number) {
        const starsArray = [];

        for(let i=0; i<amount; i++) {
            starsArray.push(<img src={starIcon}/>);
        }

        return starsArray;
    }

    return(
        <div className="review">
            <div className="stars">
                {getStarIcons(stars)}
            </div>
            <div className="description">{`Rated ${stars} Stars in ${source}`}</div>
        </div>
    )
}

interface ProofProps {
    name: string;
    avatar: string;
    testimony: string;
}

function Proof({ name, avatar, testimony }: ProofProps) {
    return(
        <div className='proof'>
            <div className='info'>
                <img className='avatar' src={avatar}/>
                <div className='personal'>
                    <div className='name'>{name}</div>
                    <div className='verified-buyer'>Verified Buyer</div>
                </div>
            </div>
            <div className='testimony'>{`" ${testimony} "`}</div>
        </div>
    )
}

export default function SocialProof() {
    return(
        <>
            <img className='desktop pattern-top' src={bgPatternTopDesktop}/>
            <img className='desktop pattern-bottom' src={bgPatternBottomDesktop}/>
            <img className='mobile pattern-top' src={bgPatternTopMobile}/>
            <img className='mobile pattern-bottom' src={bgPatternBottomMobile}/>
            <div className="main">
                <div className="top">
                    <div className="info">
                        <h1 className="title">10,000+ of our users love our products.</h1>
                        <p className="description">We only provide great products combined with excellent customer service. See what our customers are saying about our services.</p>
                    </div>
                    <div className="reviews">
                        <Review stars={5} source="Reviews"/>
                        <Review stars={5} source="Report Guru"/>
                        <Review stars={5} source="BestTech"/>
                    </div>
                </div>
                <div className="proofs">
                    <Proof name="Colton Smith" avatar={coltonAvatar} testimony="We needed the same printed design as the one we had ordered a week prior Not only did they findd the original order, but we also received it in time. Excellent!"/>
                    <Proof name="Irene Roberts" avatar={ireneAvatar} testimony="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."/>
                    <Proof name="Anne Wallace" avatar={anneAvatar} testimony="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"/>
                </div>
            </div>
        </>
    )
}