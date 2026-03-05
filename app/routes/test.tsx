import React from 'react';
import type { Route } from './+types/test';

export function meta({}: Route.MetaArgs) {
    return [
      { title: "generated test Demo" },
      { name: "description", content: "generated test demo" },
    ];
  }

export default function frame() {
  return (
    <div
      style={{
        background: '#F9F9F9',
        overflow: 'hidden',
        // // mixBlendMode: 'pass-through',
        position: 'relative'
      }}>
      <div
        style={{
          width: '202px',
          height: '48px',
          display: 'flex',
          flex: 'none',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
          background: '#EDEDED',
          borderRadius: '100px',
          position: 'absolute',
          left: '284px',
          top: '120px',
          // mixBlendMode: 'pass-through'
        }}>
        <div
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingRight: '20px',
            paddingLeft: '20px',
            background: '#0D0D0D',
            borderRadius: '100px',
            // mixBlendMode: 'pass-through'
          }}>
          <p
            style={{
              alignSelf: 'stretch',
              flexShrink: '0',
              color: '#FEFEFE',
              fontSize: '16px',
              fontFamily: 'PingFang SC',
              textAlign: 'center',
              // mixBlendMode: 'pass-through'
            }}>
            买家
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingRight: '28px',
            paddingLeft: '20px',
            background: '#EDEDED',
            borderRadius: '100px',
            // mixBlendMode: 'pass-through'
          }}>
          <p
            style={{
              alignSelf: 'stretch',
              flexShrink: '0',
              color: '#0D0D0D',
              fontSize: '16px',
              fontFamily: 'PingFang SC',
              textAlign: 'center',
              // mixBlendMode: 'pass-through'
            }}>
            卖家
          </p>
        </div>
      </div>
      <div
        style={{
          width: '1122px',
          height: '1872px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: '40px',
          paddingTop: '40px',
          paddingBottom: '100px',
          paddingRight: '40px',
          paddingLeft: '40px',
          background: '#FEFEFE',
          borderRadius: '12px',
          position: 'absolute',
          left: '514px',
          top: '196px',
          // mixBlendMode: 'pass-through'
        }}>
        <div
          style={{
            width: '1042px',
            display: 'flex',
            flex: 'none',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '60px',
            // mixBlendMode: 'pass-through'
          }}>
          <div
            style={{
              width: '260px',
              height: '40px',
              display: 'flex',
              flex: 'none',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '4px',
              paddingBottom: '4px',
              paddingRight: '16px',
              paddingLeft: '16px',
              background: '#F5F5F5',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                flex: '1',
                color: '#888888',
                fontSize: '14px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              输入标题/关键词/素材编号
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '12px',
                // mixBlendMode: 'pass-through'
              }}>
              <img
                src="./asset1/icons/svg_666b0d60.svg"
                style={{ width: '16px', height: '16px' }}
              />
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  flex: 'none',
                  // // mixBlendMode: 'pass-through',
                  position: 'relative'
                }}>
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    flex: 'none',
                    background: 'rgba(254,254,254,0)',
                    position: 'absolute',
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '0%',
                    // mixBlendMode: 'pass-through'
                  }}></div>
                <div style={{ position: 'absolute', left: '2px', top: '2px' }}>
                  <img src="./asset1/icons/svg_005c4897.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '1042px',
            display: 'flex',
            flex: 'none',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: '28px',
            // mixBlendMode: 'pass-through'
          }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '24px',
              // mixBlendMode: 'pass-through'
            }}>
            <div
              style={{
                display: 'flex',
                flex: '1',
                flexShrink: '0',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: '24px',
                // mixBlendMode: 'pass-through'
              }}>
              <div
                style={{
                  display: 'flex',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '8px',
                  // mixBlendMode: 'pass-through'
                }}>
                <img
                  src="./asset1/icons/svg_54bdae39.svg"
                  style={{ width: '20px', height: '20px' }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    gap: '4px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFangSC-Regular',
                      lineHeight: '22px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    全部
                  </span>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFangSC-Regular',
                      lineHeight: '22px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    6
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '8px',
                  // mixBlendMode: 'pass-through'
                }}>
                <img
                  src="./asset1/icons/svg_54bdae39.svg"
                  style={{ width: '20px', height: '20px' }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    gap: '4px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFangSC-Regular',
                      lineHeight: '22px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    授权未生效
                  </span>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFangSC-Regular',
                      lineHeight: '22px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    0
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '8px',
                  // mixBlendMode: 'pass-through'
                }}>
                <img
                  src="./asset1/icons/svg_54bdae39.svg"
                  style={{ width: '20px', height: '20px' }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    gap: '4px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFangSC-Regular',
                      lineHeight: '22px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    授权已生效
                  </span>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFangSC-Regular',
                      lineHeight: '22px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    0
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexShrink: '0',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: '24px',
                // mixBlendMode: 'pass-through'
              }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '4px',
                  // mixBlendMode: 'pass-through'
                }}>
                <span
                  style={{
                    color: '#0066CC',
                    fontSize: '14px',
                    fontFamily: 'PingFang SC',
                    lineHeight: '22px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  数据导出
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  // mixBlendMode: 'pass-through'
                }}>
                <span
                  style={{
                    color: '#0066CC',
                    fontSize: '14px',
                    fontFamily: 'PingFang SC',
                    lineHeight: '22px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  批量操作
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              gap: '16px',
              // mixBlendMode: 'pass-through'
            }}>
            <div
              style={{
                display: 'flex',
                flexShrink: '0',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                // mixBlendMode: 'pass-through'
              }}>
              <span
                style={{
                  color: '#888888',
                  fontSize: '14px',
                  fontFamily: 'PingFang SC',
                  // mixBlendMode: 'pass-through'
                }}>
                完成项目后，上传成片案例即可得好礼优惠
              </span>
              <img
                src="./asset1/icons/svg_edd36505.svg"
                style={{ width: '16px', height: '16px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignSelf: 'stretch',
                flexShrink: '0',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '60px',
                // mixBlendMode: 'pass-through'
              }}>
              <div
                style={{
                  display: 'flex',
                  alignSelf: 'stretch',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  gap: '28px',
                  // mixBlendMode: 'pass-through'
                }}>
                <div
                  style={{
                    display: 'flex',
                    alignSelf: 'stretch',
                    flexShrink: '0',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        width: '474.5px',
                        display: 'flex',
                        flex: 'none',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        paddingRight: '24px',
                        paddingLeft: '24px',
                        background: '#F9F9F9',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <p
                        style={{
                          alignSelf: 'stretch',
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        素材/金额
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flex: '1',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        paddingRight: '24px',
                        paddingLeft: '24px',
                        background: '#F9F9F9',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <p
                        style={{
                          alignSelf: 'stretch',
                          flexShrink: '0',
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        授权信息
                      </p>
                    </div>
                    <div
                      style={{
                        width: '180px',
                        display: 'flex',
                        flex: 'none',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        paddingRight: '24px',
                        paddingLeft: '24px',
                        background: '#F9F9F9',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <p
                        style={{
                          alignSelf: 'stretch',
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        操作
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '1042px',
                      display: 'flex',
                      flex: 'none',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/613ba75d8c3c6d76374c9b4f95680e85.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/024bfd33ed54b9445397283831290ab9.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          四川成都光厂领衔创意有限文化公司
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          查看授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            操作员
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            yinji456
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/11e3da065105f959edda08fbbf42fdaa.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/afeeeb38a6d07c57c10b74b61430bced.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/d6b899db799b0db975d2da1d53b12689.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/af924c868a3dc703f531bcda1633ded2.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/c780c1d096d37f350de6462b87d7deda.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/d527e74991037e656aafbb16dc63f236.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/054b810a85d408fd9c21da181e6b9a4a.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignSelf: 'stretch',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      background: '#FEFEFE',
                      borderRadius: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: '20px',
                        paddingBottom: '16px',
                        background: 'rgba(254,254,254,0)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          columnGap: '24px',
                          rowGap: '4px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            购买时间
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            2023.08.30 00:02:10
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            订单编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            SC230710150056000
                          </span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexShrink: '0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: '4px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            素材编号
                          </span>
                          <span
                            style={{
                              color: '#888888',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            71015005
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '12px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          评论
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          售后
                        </p>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            textAlign: 'right',
                            // mixBlendMode: 'pass-through'
                          }}>
                          下载
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'stretch',
                        flexShrink: '0',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingBottom: '24px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <div
                        style={{
                          width: '474.5px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '16px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <img
                          src="./asset1/images/26a11c67becf725c1b54503b0747780d.png"
                          title="矩形 726"
                          style={{
                            width: '103px',
                            height: '58px',
                            flex: 'none',
                            borderRadius: '4px',
                            objectFit: 'cover',
                            // mixBlendMode: 'pass-through'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flex: '1',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            gap: '8px',
                            // mixBlendMode: 'pass-through'
                          }}>
                          <p
                            style={{
                              alignSelf: 'stretch',
                              flexShrink: '0',
                              color: '#0D0D0D',
                              fontSize: '14px',
                              fontFamily: 'PingFang SC',
                              // mixBlendMode: 'pass-through'
                            }}>
                            春万物复苏惊蛰生长逢时走向
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              flexShrink: '0',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              flexDirection: 'row',
                              gap: '8px',
                              // mixBlendMode: 'pass-through'
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '4px',
                                // mixBlendMode: 'pass-through'
                              }}>
                              <span
                                style={{
                                  color: '#0D0D0D',
                                  fontSize: '14px',
                                  fontFamily: 'PingFang SC',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                900元
                              </span>
                            </div>
                            <div
                              style={{
                                width: '1px',
                                height: '10px',
                                flex: 'none',
                                background: '#888888',
                                // mixBlendMode: 'pass-through'
                              }}></div>
                            <img
                              src="./asset1/icons/svg_005f06d4.svg"
                              style={{ width: '20px', height: '20px' }}
                            />
                            <img
                              src="./asset1/icons/svg_06f62254.svg"
                              style={{ width: '16px', height: '16px' }}
                            />
                            <div
                              style={{
                                width: '71px',
                                height: '22px',
                                flex: 'none',
                                // // mixBlendMode: 'pass-through',
                                position: 'relative'
                              }}>
                              <div
                                style={{
                                  width: '43px',
                                  height: '22px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: '4px',
                                  position: 'absolute',
                                  left: '0px',
                                  top: '0px',
                                  // mixBlendMode: 'pass-through'
                                }}>
                                <div
                                  style={{
                                    width: '16px',
                                    height: '16px',
                                    flex: 'none',
                                    // // mixBlendMode: 'pass-through',
                                    position: 'relative'
                                  }}>
                                  <div
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      flex: 'none',
                                      background: '#0D0D0D',
                                      borderRadius: '4.8px',
                                      position: 'absolute',
                                      left: '0%',
                                      right: '0%',
                                      top: '0%',
                                      bottom: '0%',
                                      // mixBlendMode: 'pass-through'
                                    }}></div>
                                  <div
                                    style={{
                                      width: '14.4px',
                                      height: '14.4px',
                                      flex: 'none',
                                      position: 'absolute',
                                      left: '5%',
                                      right: '5%',
                                      top: '5%',
                                      bottom: '5%',
                                      // mixBlendMode: 'pass-through'
                                    }}>
                                    <div
                                      style={{
                                        width: '14.4px',
                                        height: '14.4px',
                                        flex: 'none',
                                        background: '#FEFEFE',
                                        opacity: '0',
                                        position: 'absolute',
                                        left: '0%',
                                        right: '0%',
                                        top: '0%',
                                        bottom: '0%',
                                        // mixBlendMode: 'pass-through'
                                      }}></div>
                                    <div
                                      style={{
                                        position: 'absolute',
                                        left: '0.72px',
                                        top: '1.62px'
                                      }}>
                                      <img src="./asset1/icons/svg_7c724cee.svg" />
                                    </div>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    color: '#0D0D0D',
                                    fontSize: '14px',
                                    fontFamily: 'PingFang SC',
                                    // mixBlendMode: 'pass-through'
                                  }}>
                                  8折
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flex: '1',
                          flexShrink: '0',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#0D0D0D',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          个人授权
                        </p>
                        <p
                          style={{
                            alignSelf: 'stretch',
                            flexShrink: '0',
                            color: '#EE4A4A',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          未生效
                        </p>
                      </div>
                      <div
                        style={{
                          width: '180px',
                          display: 'flex',
                          flex: 'none',
                          flexShrink: '0',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'column',
                          gap: '8px',
                          paddingRight: '24px',
                          paddingLeft: '24px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          获取授权
                        </span>
                        <span
                          style={{
                            color: '#0066CC',
                            fontSize: '14px',
                            fontFamily: 'PingFang SC',
                            // mixBlendMode: 'pass-through'
                          }}>
                          升级授权
                        </span>
                      </div>
                    </div>
                    <img
                      src="./asset1/icons/svg_9e348854.svg"
                      style={{ width: '1042px', height: '1px' }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexShrink: '0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  // mixBlendMode: 'pass-through'
                }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    gap: '20px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      paddingTop: '9px',
                      paddingBottom: '9px',
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      background: '#FEFEFE',
                      borderStyle: 'solid',
                      borderColor: '#EDEDED',
                      borderWidth: '1px',
                      borderRadius: '55px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <p
                      style={{
                        color: '#CCCCCC',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        textAlign: 'center',
                        // mixBlendMode: 'pass-through'
                      }}>
                      上一页
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      gap: '8px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#0D0D0D',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#FEFEFE',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        1
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        2
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        3
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        4
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        5
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        6
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        7
                      </span>
                    </div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <img
                        src="./asset1/icons/svg_5090068b.svg"
                        style={{ width: '16px', height: '16px' }}
                      />
                    </div>
                    <div
                      style={{
                        width: '80px',
                        height: '40px',
                        display: 'flex',
                        flex: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingRight: '12px',
                        paddingLeft: '12px',
                        background: '#FEFEFE',
                        borderStyle: 'solid',
                        borderColor: '#EDEDED',
                        borderWidth: '1px',
                        borderRadius: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#888888',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        自定义
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      paddingTop: '9px',
                      paddingBottom: '9px',
                      paddingRight: '20px',
                      paddingLeft: '20px',
                      background: '#FEFEFE',
                      borderStyle: 'solid',
                      borderColor: '#EDEDED',
                      borderWidth: '1px',
                      borderRadius: '55px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <p
                      style={{
                        color: '#0D0D0D',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        textAlign: 'center',
                        // mixBlendMode: 'pass-through'
                      }}>
                      下一页
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '1920px',
          height: '80px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          position: 'absolute',
          left: 'calc(100% - 1920px + 0px)',
          top: '0px',
          // mixBlendMode: 'pass-through'
        }}>
        <div
          style={{
            width: '1920px',
            display: 'flex',
            flex: 'none',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            // mixBlendMode: 'pass-through'
          }}>
          <div
            style={{
              width: '1920px',
              display: 'flex',
              flex: 'none',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '16px',
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingRight: '44px',
              paddingLeft: '44px',
              background: 'rgba(254,254,254,0.92)',
              backdropFilter: 'blur(8px)',
              // mixBlendMode: 'pass-through'
            }}>
            <div
              style={{
                display: 'flex',
                flex: '1',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '28px',
                // mixBlendMode: 'pass-through'
              }}>
              <img
                src="./asset1/icons/svg_452af001.svg"
                style={{ width: '84px', height: '22px' }}
              />
              <div
                style={{
                  display: 'flex',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  gap: '4px',
                  // // mixBlendMode: 'pass-through',
                  position: 'relative'
                }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: 'rgba(254,254,254,0)',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '16px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    找视频
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: 'rgba(254,254,254,0)',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '16px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    找图片
                  </span>
                </div>
                <div
                  style={{
                    width: '24px',
                    height: '18px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    paddingRight: '6px',
                    paddingLeft: '6px',
                    background: '#0071E3',
                    borderRadius: '91px',
                    position: 'absolute',
                    left: '140px',
                    top: '-1px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <p
                    style={{
                      color: '#FEFEFE',
                      fontSize: '12px',
                      fontFamily: 'PingFangSC-Medium',
                      textAlign: 'center',
                      lineHeight: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    新
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: 'rgba(254,254,254,0)',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '16px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    找音乐
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: 'rgba(254,254,254,0)',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '16px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    找案例
                  </span>
                </div>
                <div
                  style={{
                    width: '24px',
                    height: '18px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    paddingRight: '6px',
                    paddingLeft: '6px',
                    background: '#0071E3',
                    borderRadius: '91px',
                    position: 'absolute',
                    left: '307.94px',
                    top: '-1px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <p
                    style={{
                      color: '#FEFEFE',
                      fontSize: '12px',
                      fontFamily: 'PingFangSC-Medium',
                      textAlign: 'center',
                      lineHeight: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    新
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: 'rgba(254,254,254,0)',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '16px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    找服务
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: 'rgba(254,254,254,0)',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '16px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    版权中心
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                width: '260px',
                display: 'flex',
                flex: 'none',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '16px',
                paddingTop: '9px',
                paddingBottom: '9px',
                paddingRight: '20px',
                paddingLeft: '20px',
                background: '#FEFEFE',
                borderStyle: 'solid',
                borderColor: '#CCCCCC',
                borderWidth: '1px',
                borderRadius: '100px',
                // mixBlendMode: 'pass-through'
              }}>
              <p
                style={{
                  flex: '1',
                  color: '#888888',
                  fontSize: '14px',
                  fontFamily: 'PingFang SC',
                  lineHeight: '22px',
                  // mixBlendMode: 'pass-through'
                }}>
                输入关键词，找音乐
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  gap: '16px',
                  // mixBlendMode: 'pass-through'
                }}>
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    flex: 'none',
                    // // mixBlendMode: 'pass-through',
                    position: 'relative'
                  }}>
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      flex: 'none',
                      background: 'rgba(254,254,254,0)',
                      position: 'absolute',
                      left: '0%',
                      right: '0%',
                      top: '0%',
                      bottom: '0%',
                      // mixBlendMode: 'pass-through'
                    }}></div>
                  <div
                    style={{ position: 'absolute', left: '2px', top: '2px' }}>
                    <img src="./asset1/icons/svg_005c4897.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '16px',
                // mixBlendMode: 'pass-through'
              }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  gap: '4px',
                  // // mixBlendMode: 'pass-through',
                  position: 'relative'
                }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    paddingRight: '12px',
                    paddingLeft: '12px',
                    background: 'rgba(254,254,254,0)',
                    borderRadius: '100px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    邀新
                  </span>
                </div>
                <div
                  style={{
                    width: '24px',
                    height: '18px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    paddingRight: '6px',
                    paddingLeft: '6px',
                    background: '#0071E3',
                    borderRadius: '91px',
                    position: 'absolute',
                    left: '32px',
                    top: '-2px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <p
                    style={{
                      color: '#FEFEFE',
                      fontSize: '12px',
                      fontFamily: 'PingFangSC-Medium',
                      textAlign: 'center',
                      lineHeight: '12px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    惠
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    paddingRight: '12px',
                    paddingLeft: '12px',
                    background: 'rgba(254,254,254,0)',
                    borderRadius: '100px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    充值
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    paddingRight: '12px',
                    paddingLeft: '12px',
                    background: 'rgba(254,254,254,0)',
                    borderRadius: '100px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    上传
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '28px',
                  // mixBlendMode: 'pass-through'
                }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    paddingRight: '16px',
                    paddingLeft: '16px',
                    background: '#F5F5F5',
                    borderRadius: '100px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    888888.8元
                  </span>
                </div>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    flex: 'none',
                    // // mixBlendMode: 'pass-through',
                    position: 'relative'
                  }}>
                  <img
                    src="./asset1/images/f17ca557bd400fef535822c54d49c91d.jpg"
                    title="椭圆形备份 2"
                    style={{
                      flex: 'none',
                      position: 'absolute',
                      left: '0%',
                      right: '0%',
                      top: '0%',
                      bottom: '0%',
                      width: '36px',
                      height: '36px',
                      objectFit: 'cover',
                      // mixBlendMode: 'pass-through'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '1122px',
          height: '46px',
          display: 'flex',
          flex: 'none',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          left: '514px',
          top: '121px',
          // mixBlendMode: 'pass-through'
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '8px',
            // mixBlendMode: 'pass-through'
          }}>
          <span
            style={{
              color: '#404040',
              fontSize: '14px',
              fontFamily: 'PingFang SC',
              // mixBlendMode: 'pass-through'
            }}>
            首页
          </span>
          <img
            src="./asset1/icons/svg_4a4d6396.svg"
            style={{ width: '16px', height: '16px' }}
          />
          <span
            style={{
              color: '#404040',
              fontSize: '14px',
              fontFamily: 'PingFang SC',
              // mixBlendMode: 'pass-through'
            }}>
            买家中心
          </span>
          <img
            src="./asset1/icons/svg_ff2f63b7.svg"
            style={{ width: '16px', height: '16px' }}
          />
          <span
            style={{
              color: '#0D0D0D',
              fontSize: '20px',
              fontFamily: 'PingFang SC',
              // mixBlendMode: 'pass-through'
            }}>
            购买记录
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            padding: '4px',
            background: '#EDEDED',
            borderRadius: '100px',
            // mixBlendMode: 'pass-through'
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingRight: '16px',
              paddingLeft: '16px',
              background: '#FEFEFE',
              borderRadius: '100px',
              boxShadow:
                '0px 0px 10px 0px rgba(0,0,0,0.08), 0px 0px 0px 0px rgba(0,0,0,0.08)',
              // mixBlendMode: 'pass-through'
            }}>
            <span
              style={{
                color: '#0D0D0D',
                fontSize: '14px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              视频
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingRight: '16px',
              paddingLeft: '16px',
              background: 'rgba(254,254,254,0)',
              borderRadius: '100px',
              // mixBlendMode: 'pass-through'
            }}>
            <span
              style={{
                color: '#0D0D0D',
                fontSize: '14px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              图片
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingRight: '16px',
              paddingLeft: '16px',
              background: 'rgba(254,254,254,0)',
              borderRadius: '100px',
              // mixBlendMode: 'pass-through'
            }}>
            <span
              style={{
                color: '#0D0D0D',
                fontSize: '14px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              音乐
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '202px',
          height: '660px',
          display: 'flex',
          flex: 'none',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: '20px',
          position: 'absolute',
          left: '284px',
          top: '196px',
          // mixBlendMode: 'pass-through'
        }}>
        <div
          style={{
            display: 'flex',
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            padding: '12px',
            background: '#FEFEFE',
            borderRadius: '12px',
            // mixBlendMode: 'pass-through'
          }}>
          <div
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#EDEDED',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                width: '128px',
                flex: 'none',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              购买记录
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                width: '128px',
                flex: 'none',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              充值与发票
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                width: '128px',
                flex: 'none',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              浏览记录
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                width: '128px',
                flex: 'none',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              收藏
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                width: '128px',
                flex: 'none',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              拍片需求
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                width: '128px',
                flex: 'none',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              我的歌单
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            padding: '12px',
            background: '#FEFEFE',
            borderRadius: '12px',
            // mixBlendMode: 'pass-through'
          }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <img
              src="./asset1/icons/svg_06cd4b94.svg"
              style={{ width: '20px', height: '20px' }}
            />
            <p
              style={{
                flex: '1',
                flexShrink: '0',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              账号
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <img
              src="./asset1/icons/svg_0694c912.svg"
              style={{ width: '20px', height: '20px' }}
            />
            <p
              style={{
                flex: '1',
                flexShrink: '0',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              操作员
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <img
              src="./asset1/icons/svg_7c4da7e4.svg"
              style={{ width: '20px', height: '20px' }}
            />
            <p
              style={{
                flex: '1',
                flexShrink: '0',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              工单
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'stretch',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              paddingRight: '20px',
              paddingLeft: '20px',
              background: '#FEFEFE',
              borderRadius: '8px',
              // mixBlendMode: 'pass-through'
            }}>
            <img
              src="./asset1/icons/svg_075c8bbc.svg"
              style={{ width: '20px', height: '20px' }}
            />
            <p
              style={{
                flex: '1',
                flexShrink: '0',
                color: '#0D0D0D',
                fontSize: '16px',
                fontFamily: 'PingFang SC',
                // mixBlendMode: 'pass-through'
              }}>
              消息
            </p>
          </div>
        </div>
        <div
          style={{
            width: '202px',
            display: 'flex',
            flex: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '8px',
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingRight: '20px',
            paddingLeft: '20px',
            background: '#EDEDED',
            borderRadius: '12px',
            // // mixBlendMode: 'pass-through',
            position: 'relative'
          }}>
          <span
            style={{
              color: '#0D0D0D',
              fontSize: '16px',
              fontFamily: 'PingFang SC',
              // mixBlendMode: 'pass-through'
            }}>
            提建议，得奖励
          </span>
          <div
            style={{
              width: '24px',
              height: '18px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'row',
              paddingTop: '3px',
              paddingBottom: '3px',
              paddingRight: '6px',
              paddingLeft: '6px',
              background: '#0071E3',
              borderRadius: '91px',
              position: 'absolute',
              left: 'calc(100% - 202px + 149px)',
              top: '7px',
              // mixBlendMode: 'pass-through'
            }}>
            <p
              style={{
                color: '#FEFEFE',
                fontSize: '12px',
                fontFamily: 'PingFangSC-Medium',
                textAlign: 'center',
                lineHeight: '12px',
                // mixBlendMode: 'pass-through'
              }}>
              新
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '1920px',
          height: '490px',
          display: 'flex',
          flex: 'none',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          position: 'absolute',
          left: '0px',
          bottom: '0px',
          // mixBlendMode: 'pass-through'
        }}>
        <div
          style={{
            display: 'flex',
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            // mixBlendMode: 'pass-through'
          }}>
          <img
            src="./asset1/icons/svg_3dd2b3b9.svg"
            style={{ width: '240px', height: '490px' }}
          />
          <div
            style={{
              width: '1440px',
              display: 'flex',
              flex: 'none',
              flexShrink: '0',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              // mixBlendMode: 'pass-through'
            }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: '120px',
                paddingTop: '80px',
                paddingBottom: '80px',
                paddingRight: '44px',
                paddingLeft: '44px',
                background: '#F5F5F5',
                // mixBlendMode: 'pass-through'
              }}>
              <div
                style={{
                  display: 'flex',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  gap: '60px',
                  // mixBlendMode: 'pass-through'
                }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <img
                    src="./asset1/icons/svg_7fe91bf4.svg"
                    style={{ width: '107px', height: '28px' }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '20px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        gap: '8px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <span
                        style={{
                          color: '#0D0D0D',
                          fontSize: '18px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        让创意更有价值 , 让世界更生动
                      </span>
                      <p
                        style={{
                          width: '400px',
                          flex: 'none',
                          color: '#404040',
                          fontSize: '14px',
                          fontFamily: 'PingFang SC',
                          // mixBlendMode: 'pass-through'
                        }}>
                        我们相信，通过平台的效率和体验优化，搭建良性创作环境，就能源源不断输出好的数字创意作品，让世界更生动！
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: '4px',
                        // mixBlendMode: 'pass-through'
                      }}>
                      <img
                        src="./asset1/icons/svg_ad1737e0.svg"
                        style={{ width: '12px', height: '12px' }}
                      />
                      <span
                        style={{
                          color: '#404040',
                          fontSize: '12px',
                          fontFamily: 'PingFang SC',
                          lineHeight: '12px',
                          // mixBlendMode: 'pass-through'
                        }}>
                        2012-2024
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    gap: '16px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      padding: '14px',
                      background: '#EDEDED',
                      borderRadius: '8px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        flex: 'none',
                        // // mixBlendMode: 'pass-through',
                        position: 'relative'
                      }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          flex: 'none',
                          background: 'rgba(254,254,254,0)',
                          position: 'absolute',
                          left: '0%',
                          right: '0%',
                          top: '0%',
                          bottom: '0%',
                          // mixBlendMode: 'pass-through'
                        }}></div>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          flex: 'none',
                          position: 'absolute',
                          left: '0%',
                          right: '0%',
                          top: '0%',
                          bottom: '0%',
                          // mixBlendMode: 'pass-through'
                        }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            flex: 'none',
                            background: 'rgba(254,254,254,0)',
                            position: 'absolute',
                            left: '0%',
                            right: '0%',
                            top: '0%',
                            bottom: '0%',
                            // mixBlendMode: 'pass-through'
                          }}></div>
                        <div
                          style={{
                            position: 'absolute',
                            left: '1.25px',
                            top: '2.5px'
                          }}>
                          <img src="./asset1/icons/svg_005c4897.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      padding: '14px',
                      background: '#EDEDED',
                      borderRadius: '8px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <img
                      src="./asset1/icons/svg_91b63d1e.svg"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      padding: '14px',
                      background: '#EDEDED',
                      borderRadius: '8px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        flex: 'none',
                        // // mixBlendMode: 'pass-through',
                        position: 'relative'
                      }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          flex: 'none',
                          background: 'rgba(254,254,254,0)',
                          position: 'absolute',
                          left: '0%',
                          right: '0%',
                          top: '0%',
                          bottom: '0%',
                          // mixBlendMode: 'pass-through'
                        }}></div>
                      <div
                        style={{
                          position: 'absolute',
                          left: '3.33px',
                          top: '1.67px'
                        }}>
                        <img src="./asset1/icons/svg_005c4897.svg" />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      flex: 'none',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: '14px',
                      background: '#EDEDED',
                      borderRadius: '8px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <img
                      src="./asset1/icons/svg_005f06d4.svg"
                      style={{ width: '32px', height: '32px' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      padding: '14px',
                      background: '#EDEDED',
                      borderRadius: '8px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <img
                      src="./asset1/icons/svg_91b63d1e.svg"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: '832px',
                  display: 'flex',
                  flex: 'none',
                  flexShrink: '0',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  // mixBlendMode: 'pass-through'
                }}>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      flexShrink: '0',
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    光厂视频
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '16px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      上传视频
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      精品视频
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      精选专辑
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      免费素材
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      flexShrink: '0',
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    光厂图片
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '16px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      上传图片
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      精品图片
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        opacity: '0',
                        // mixBlendMode: 'pass-through'
                      }}>
                      免费图片
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      flexShrink: '0',
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    光厂音乐
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '16px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      热门音乐
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      热门歌单
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      立即入驻
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      flexShrink: '0',
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    光厂案例
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '16px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      上传案例
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      精选案例
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        opacity: '0',
                        // mixBlendMode: 'pass-through'
                      }}>
                      优秀分享
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      flexShrink: '0',
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    光厂服务
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '16px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      上架服务
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      热门服务
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      创作人
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    gap: '24px',
                    // mixBlendMode: 'pass-through'
                  }}>
                  <span
                    style={{
                      flexShrink: '0',
                      color: '#0D0D0D',
                      fontSize: '14px',
                      fontFamily: 'PingFang SC',
                      // mixBlendMode: 'pass-through'
                    }}>
                    关于光厂
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: '0',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      gap: '16px',
                      // mixBlendMode: 'pass-through'
                    }}>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      关于我们
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      诚聘英才
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      帮助中心
                    </span>
                    <span
                      style={{
                        color: '#404040',
                        fontSize: '14px',
                        fontFamily: 'PingFang SC',
                        // mixBlendMode: 'pass-through'
                      }}>
                      权责声明
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'row',
                gap: '28px',
                paddingTop: '20px',
                paddingBottom: '20px',
                paddingRight: '284px',
                paddingLeft: '284px',
                background: '#0D0D0D',
                // mixBlendMode: 'pass-through'
              }}>
              <span
                style={{
                  flexShrink: '0',
                  color: '#EDEDED',
                  fontSize: '12px',
                  fontFamily: 'PingFang SC',
                  // mixBlendMode: 'pass-through'
                }}>
                增值电信业务经营许可证：川B2-20160192
              </span>
              <span
                style={{
                  flexShrink: '0',
                  color: '#EDEDED',
                  fontSize: '12px',
                  fontFamily: 'PingFang SC',
                  // mixBlendMode: 'pass-through'
                }}>
                蜀ICP备12020238号-4
              </span>
              <span
                style={{
                  flexShrink: '0',
                  color: '#EDEDED',
                  fontSize: '12px',
                  fontFamily: 'PingFang SC',
                  // mixBlendMode: 'pass-through'
                }}>
                川公网安备51019002000262
              </span>
              <span
                style={{
                  flexShrink: '0',
                  color: '#EDEDED',
                  fontSize: '12px',
                  fontFamily: 'PingFang SC',
                  // mixBlendMode: 'pass-through'
                }}>
                广播电视节目制作经营许可证（川）字第20170号
              </span>
              <span
                style={{
                  flexShrink: '0',
                  color: '#EDEDED',
                  fontSize: '12px',
                  fontFamily: 'PingFang SC',
                  // mixBlendMode: 'pass-through'
                }}>
                违法和不良信息举报中心
              </span>
            </div>
          </div>
          <img
            src="./asset1/icons/svg_8adf9ef8.svg"
            style={{ width: '240px', height: '490px' }}
          />
        </div>
      </div>
    </div>
  );
}
