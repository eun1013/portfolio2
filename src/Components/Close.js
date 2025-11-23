
const Close = () => {
    return (
        <div className="close">
        <img
        src={`${process.env.PUBLIC_URL}/images/title/title01.png`}
        alt="PORTFOLIO 로고 이미지"
        />
            <h1>사용자의 마음에 따뜻하게 공감하며<br/>디자인 의도를 꼼꼼히 구현하는 웹퍼블리셔 장성은입니다.</h1>
            <ul>
                <li>이름 : 장성은</li>
                <li>연락처 : 010-2573-1101</li>
                <li><a href="https://github.com/eun1013" target="_blank">GitHub : https://github.com/eun1013</a></li>
                <li><a href="https://eun1013.github.io/portfolio2/" target="_blank">Portfolio : https://eun1013.github.io/portfolio2/</a></li>
            </ul>
        </div>
    );
};

export default Close;