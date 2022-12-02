import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          중부대학교 정보보호학전공
          <br className="hidden lg:inline-block" />
          91812323 박범주입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          중부대학교 고양캠퍼스에서 정보보호학을 전공하고있는 18학번
          박범주입니다. 웹 어플리케이션 보안 수업을 들으며 웹에 대한 지식을
          배워가고 있습니다. 현재 팀원들과 Fall Guys라는 팀으로 한국에 존재하는
          다양한 축제 문화들을 하나의 사이트에서 정보를 확인할 수 있는 사이트를
          제작하고 있습니다. 팀원들과 한 학기동안 프로젝트를 훌륭히 제 역할을
          수행해가며 만족스러운 결과물을 낼 수 있도록 팀원들과 노력해가겠습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
