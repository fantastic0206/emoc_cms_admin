import styled from 'styled-components';

const ModuleWrapperContainer = styled.div`
  position: relative;

  .module-wrapper--header {
    border-top: 1px solid #b4c3ca;
    border-bottom: 1px solid #b4c3ca;
    box-shadow: 0px 1px 10px rgba(0,0,0,.2);
    background-color: #f7f9fa;
    padding: 0;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 10;
    height: 77px;

    .module-wrapper--header-left {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-right: 1px solid #e5ebed;
      cursor: pointer;
    }

    .module-wrapper--header-center {
      padding: 17px 20px 15px;

      .module-wrapper--title {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 2px;
      }

      .module-wrapper--internal-name {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 0;
      }
    }

    .module-wrapper--header-right {
      right: 0;
      position: fixed;
      display: flex;
      align-items: center;
      height: 77px;
      padding-right: 40px;
    }
  }

  .module-wrapper--form-container {
    padding: 100px 40px 30px;

    .module-wrapper--loading {
      height: calc(100vh - 180px);
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 23px;
        font-weight: 600;
        margin-left: 15px;
      }
    }

    .imgs-set {
      display: flex;
      flex-wrap: wrap;
      padding: 8px;
    }

    .imgs-set .image-set {
      width: 335px;
      transition: 0.3s;
    }

    @media(min-width:1280px) and (max-width: 1990px) {
      .imgs-set .image-set {
        width: 33.333333333%;
        padding: 0 14px;
      }
    }

    @media(min-width: 1100px) and (max-width: 1279.98px) {
      .imgs-set .image-set {
        width: 50%;
        padding: 0 14px;
      }
    }

    @media(min-width: 950px) and (max-width: 1099.98px) {
      .imgs-set .image-set {
        width: 33.3333333333%;
        padding: 0 14px;
      }
    }

    @media(min-width: 540.1px) and (max-width: 949.99px) {
      .imgs-set .image-set {
        width: 50%;
        padding: 0 14px;
      }
    }

    @media(max-width: 540px) {
      .imgs-set .image-set {
        width: 100%;
        padding: 0 50px;
      }
    }

    @media(min-width: 360px) and (max-width: 450px) {
      .imgs-set .image-set {
        padding: 0 14px;
      }
    }
  }

  .toggle-mobile-sidebar-btn {
    padding: 0px 20px;
    .hamburger-box .hamburger-inner {
      background-color: #3c44b1 !important;
    }
    .hamburger-box .hamburger-inner::before {
      background-color: #3c44b1 !important;
    }
    .hamburger-box .hamburger-inner::after {
      background-color: #3c44b1 !important;
    }
  }

@media(min-width: 1099.98px) {
  .toggle-mobile-sidebar-btn {
    display: none;
  }
}

@media(max-width: 1099.98px) {
  .module-wrapper--header-left {
    border-right: none;
    border-left: 1px solid #e5ebed;
  }
  .module-wrapper--header-center {
    display: none;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  }
}
`;

export { ModuleWrapperContainer };