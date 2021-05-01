declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// TODO: 위 코드/아래 코드 다 됨
// 파일명도 css-modules.d.ts 라고 해야 적용이 됨(이유 알아보자)
// declare module '*.scss' {
//     const styles: { [className: string]: string };
//     export default styles;
// }
