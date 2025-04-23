"use strict"


//本ファイルはBB2021Editorによって自動生成されたものです。
//ブロック崩しを動かすのに必要な記述が行われています。
//本ファイルは編集しないでください。

/** 
 *  C#のプログラムによって変更される部分
*/
const injectedText = (function () {
    const _value = String.raw`{
  "bb2021Version": "2.5.0.0",
  "generateDateTime": "2025/04/23 21:59:31",
  "defStock": 15,
  "clearPageHref": "",
  "passwordHash": "",
  "wallpaperName": "",
  "eventList": [
    {
      "ConditionList": [
        {
          "$type": "InStageCondition",
          "CheckList": [
            {
              "IsEnabled": false
            }
          ],
          "IsEnabled": false
        },
        {
          "$type": "BreakPercentCondition",
          "BreakPercentSmall": 0,
          "BreakPercentLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "StockCondition",
          "StockSmall": 0,
          "StockLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "RetryCondition",
          "IsEnabled": false
        },
        {
          "$type": "MemoryCondition",
          "Conditions": [],
          "IsEnabled": false
        }
      ],
      "Trigger": {
        "$type": "OnBreakAllOfBlockGroup",
        "BlockGroupKey": "lh1ykiqr.sdc"
      },
      "Action": {
        "$type": "ChangeBackImageAction",
        "ImageKey": "\u306F\u3060\u304B\u9AEA\u304A\u308D\u3057.JPG",
        "NextAction": {
          "$type": "ChangeSoundAction",
          "SoundType": "BGM",
          "SoundKey": "Honny_Trap.mp3",
          "NextAction": {
            "$type": "ChangeFrontImageAction",
            "ImageKey": "\u30B9\u30FC\u30C4\u9AEA\u304A\u308D\u3057.JPG",
            "NextAction": {
              "$type": "FadeTextAction",
              "Duration": 10,
              "X": 0.49899799599200473,
              "Y": 0.8006012024048639,
              "Text": "\u30D8\u30A2\u30B9\u30BF\u30A4\u30EB\u5909\u66F4",
              "FontSize": 61,
              "NextAction": {
                "$type": "NoneAction"
              }
            }
          }
        }
      }
    },
    {
      "ConditionList": [
        {
          "$type": "InStageCondition",
          "CheckList": [
            {
              "IsEnabled": false
            }
          ],
          "IsEnabled": false
        },
        {
          "$type": "BreakPercentCondition",
          "BreakPercentSmall": 85,
          "BreakPercentLarge": 100,
          "IsEnabled": true
        },
        {
          "$type": "StockCondition",
          "StockSmall": 0,
          "StockLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "RetryCondition",
          "IsEnabled": false
        },
        {
          "$type": "MemoryCondition",
          "Conditions": [],
          "IsEnabled": false
        }
      ],
      "Trigger": {
        "$type": "OnBreakPercent",
        "IsRepeatable": false
      },
      "Action": {
        "$type": "GenerateItemAction",
        "ItemName": "Ctrl",
        "NextAction": {
          "$type": "NoneAction"
        }
      }
    },
    {
      "ConditionList": [
        {
          "$type": "InStageCondition",
          "CheckList": [
            {
              "IsEnabled": false
            }
          ],
          "IsEnabled": false
        },
        {
          "$type": "BreakPercentCondition",
          "BreakPercentSmall": 88,
          "BreakPercentLarge": 100,
          "IsEnabled": true
        },
        {
          "$type": "StockCondition",
          "StockSmall": 0,
          "StockLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "RetryCondition",
          "IsEnabled": false
        },
        {
          "$type": "MemoryCondition",
          "Conditions": [],
          "IsEnabled": false
        }
      ],
      "Trigger": {
        "$type": "OnBreakPercent",
        "IsRepeatable": false
      },
      "Action": {
        "$type": "GenerateItemAction",
        "ItemName": "Ctrl",
        "NextAction": {
          "$type": "NoneAction"
        }
      }
    },
    {
      "ConditionList": [
        {
          "$type": "InStageCondition",
          "CheckList": [
            {
              "IsEnabled": false
            }
          ],
          "IsEnabled": false
        },
        {
          "$type": "BreakPercentCondition",
          "BreakPercentSmall": 90,
          "BreakPercentLarge": 100,
          "IsEnabled": true
        },
        {
          "$type": "StockCondition",
          "StockSmall": 0,
          "StockLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "RetryCondition",
          "IsEnabled": false
        },
        {
          "$type": "MemoryCondition",
          "Conditions": [],
          "IsEnabled": false
        }
      ],
      "Trigger": {
        "$type": "OnBreakPercent",
        "IsRepeatable": false
      },
      "Action": {
        "$type": "GenerateItemAction",
        "ItemName": "Many",
        "NextAction": {
          "$type": "NoneAction"
        }
      }
    },
    {
      "ConditionList": [
        {
          "$type": "InStageCondition",
          "CheckList": [
            {
              "IsEnabled": false
            }
          ],
          "IsEnabled": false
        },
        {
          "$type": "BreakPercentCondition",
          "BreakPercentSmall": 95,
          "BreakPercentLarge": 100,
          "IsEnabled": true
        },
        {
          "$type": "StockCondition",
          "StockSmall": 0,
          "StockLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "RetryCondition",
          "IsEnabled": false
        },
        {
          "$type": "MemoryCondition",
          "Conditions": [],
          "IsEnabled": false
        }
      ],
      "Trigger": {
        "$type": "OnBreakPercent",
        "IsRepeatable": false
      },
      "Action": {
        "$type": "GenerateItemAction",
        "ItemName": "Many",
        "NextAction": {
          "$type": "NoneAction"
        }
      }
    },
    {
      "ConditionList": [
        {
          "$type": "InStageCondition",
          "CheckList": [
            {
              "IsEnabled": false
            }
          ],
          "IsEnabled": false
        },
        {
          "$type": "BreakPercentCondition",
          "BreakPercentSmall": 0,
          "BreakPercentLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "StockCondition",
          "StockSmall": 0,
          "StockLarge": 100,
          "IsEnabled": false
        },
        {
          "$type": "RetryCondition",
          "IsEnabled": false
        },
        {
          "$type": "MemoryCondition",
          "Conditions": [],
          "IsEnabled": false
        }
      ],
      "Trigger": {
        "$type": "OnGameClear"
      },
      "Action": {
        "$type": "ShowMessageAction",
        "Message": "\u30AF\u30EA\u30A2\u5F8C\u3001\u753B\u9762\u30AF\u30EA\u30C3\u30AF\u3067\u753B\u50CF\u304C\u898B\u308C\u307E\u3059",
        "NextAction": {
          "$type": "NoneAction"
        }
      }
    }
  ],
  "stages": [
    {
      "nRow": 32,
      "nCol": 45,
      "aspectRatio": 1.1400000000000006,
      "padY": 0.8728070175438597,
      "padW": 0.38,
      "padH": 0.026315789473684195,
      "padCoreW": 0.2,
      "defBallR": 0.02,
      "maxV": 0.0015,
      "v0": 0.001,
      "dv": 2E-05,
      "smashV": 0.002,
      "requirePercent": 97,
      "itemPopPercent": 2,
      "itemList": {
        "Oneup": {
          "Weight": 5
        },
        "Piercing": {
          "TLim": 3000,
          "Weight": 0
        },
        "Many": {
          "N": 3,
          "Weight": 4
        },
        "Wide": {
          "Width": 0.8,
          "TLim": 30000,
          "Weight": 8
        },
        "Short": {
          "Width": 0.25,
          "TLim": 8000,
          "Weight": 5
        },
        "Blink": {
          "VisibleTime": 1500,
          "HiddenTime": 800,
          "TLim": 7000,
          "Weight": 0
        },
        "Big": {
          "Radius": 0.14,
          "TLim": 3000,
          "Weight": 0
        },
        "Ctrl": {
          "G": 0.5,
          "TLim": 3000,
          "Weight": 0
        },
        "Flash": {
          "N": 8,
          "TLim": 1500,
          "Weight": 0
        }
      },
      "soundList": {
        "BGM": "\u591C\u306E\u722A\u75D5.mp3",
        "ItemSe": "\u30AD\u30E9\u30C31.mp3",
        "PadSe": "\u30AD\u30E9\u30C31.mp3",
        "WallSe": "xmfia1mj.e1f",
        "HoldoffSe": "xpwcvyqw.a5u",
        "FailSe": "2fomsm2a.j1n",
        "StageClearSe": "Lum_chan.mp3",
        "GameClearSe": "Lum_chan.mp3"
      },
      "style": {
        "paddleBaseColor": "#0A6FFF",
        "paddleCoreColor": "#FF1414",
        "paddleStrokeColor": "#000000",
        "ballColor": "#FFEB70",
        "ballPenetrationColor": "#FF0000",
        "ballStrokeColor": "#000000",
        "blockFillColor": "#00000000",
        "blockStrokeColor": "#00000000",
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "itemGaugeFillColor": "#FF0000",
        "isBlockVisible": false,
        "isBezierMaskEnabled": true,
        "configButtonX": 10
      },
      "blockList": [
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": [
            "lh1ykiqr.sdc"
          ]
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": [
            "lh1ykiqr.sdc"
          ]
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": [
            "lh1ykiqr.sdc"
          ]
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": [
            "lh1ykiqr.sdc"
          ]
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "None",
          "Durability": 0,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        },
        {
          "Type": "Normal",
          "Durability": 1,
          "GroupKeyList": []
        }
      ],
      "foreImageName": "\u30B9\u30FC\u30C4.JPG",
      "backImageName": "\u306F\u3060\u304B.JPG"
    }
  ],
  "imageResourceList": [],
  "soundResourceList": []
}`;//json
    return {
        get value() { return _value; }
    }
})();


/** EditableParameters*/
const ep = (function () {
  const _injectedText = injectedText.value;
  const _json = JSON.parse(_injectedText);
  let _nStage;
  return {
    get defStock() { return _json.defStock; },
    // 外部URLへ移動しないならば、空白文字を設定する。
    get clearPageHref() { return _json.clearPageHref; },
    get passwordHash() { return _json.passwordHash; },
    get bb2021Version() { return _json.bb2021Version; },
    get stages() { return _json.stages; },
    get eventList() { return _json.eventList; },
    get wallpaperName() { return _json.wallpaperName; },
    get imageResourceList() {
      return typeof bb_subImageResource === "undefined" ?
        _json.imageResourceList : bb_subImageResource;
    },
    /**@type {{name:string,url:string}[]} */
    get soundResourceList() {
      return typeof bb_subSoundResource === "undefined" ?
        _json.soundResourceList : bb_subSoundResource;
    },
    // ↑C#から直接編集するパラメータ．
    // ↓うえのパラメータによって定まる（ゲーム中での）定数．
    get nStage() {
      if (_nStage === undefined) { _nStage = this.stages.length; }
      return _nStage;
    },
  }
})();


/**
 * JSONのラッパー
 */
class StageData {
    #json;
    constructor(json) {
        this.#json = json;
    }
    /**@type {Number} */
    get nRow() { return this.#json.nRow; }
    /**@type {Number} */
    get nCol() { return this.#json.nCol; }
    /**ゲームエリアの横幅に対する縦幅の（実際の）長さ
     * @type {Number}*/
    get aspectRatio() { return this.#json.aspectRatio; }
    /**@type {Number} */
    get padY() { return this.#json.padY; }
    /**@type {Number} */
    get padW() { return this.#json.padW; }
    /**@type {Number} */
    get padH() { return this.#json.padH; }
    /**@type {Number} */s
    get padCoreW() { return this.#json.padCoreW; }
    /**@type {Number} */
    get defBallR() { return this.#json.defBallR; }
    get blockList() { return this.#json.blockList; }
    /**@type {Number} */
    get maxV() { return this.#json.maxV; }
    /**@type {Number} */
    get v0() { return this.#json.v0; }
    /**@type {Number} */
    get dv() { return this.#json.dv; }
    /**@type {Number} */
    get smashV() { return this.#json.smashV; }
    /**@type {Number} */
    get requirePercent() { return this.#json.requirePercent; }
    /**@type {Number} */
    get itemPopPercent() { return this.#json.itemPopPercent; }
    get itemList() { return this.#json.itemList; }
    /**@type {{BGM:string, ItemSe:string, PadSe:string, WallSe:string, HoldoffSe:string, FailSe:string, StageClearSe:string, GameClearSe:string}}*/
    get soundList() { return this.#json.soundList; }
    get style() { return this.#json.style; }
    // TODO：単数
    /**@type {String} */
    get foreImageName() { return this.#json.foreImageName; }
    /**@type {String} */
    get backImageName() { return this.#json.backImageName; }
}

/**
 * ステージの移動の状態管理を行う。
 * 他のクラスのステージ移行を実行する。
 */
const stages = (function () {
    /** @type {StageData[]}*/
    const _list = ep.stages.map(s => new StageData(s));
    //Utilなどがすぐにcurrentにアクセスするので最初から0は準備しておく
    let currentIndex = 0;



    async function _goToFirstAsync() {
        currentIndex = 0;
        return _goToCore();
    }
    async function _goToNextAsync() {
        if (_isFinal()) { throw "no more stage"; }
        currentIndex++;
        return _goToCore();
    }
    async function _goToCore() {
        loader.loadStage(_getCurrent());
        blocks.buildStage(_getCurrent());
        dig.buildStage(_getCurrent());
        const promiseList = [
            loader.loadStageImageAsync(_getCurrent()),
            sm.buildStageAsync(_getCurrent())
        ];
        style.buildStage(_getCurrent());
        svgm.setStageText(currentIndex + 1);
        svgm.setPercentText();
        _handlerList.forEach(h => h());
        return Promise.all(promiseList);
    }

    function _getCurrent() {
        return _list[currentIndex];
    }
    function _getLen() {
        return _list.length;
    }
    function _isFinal() {
        return currentIndex === _getLen() - 1;
    }

    const _handlerList = [];
    return {
        goToFirstAsync: _goToFirstAsync,
        goToNextAsync: _goToNextAsync,
        get length() { return _getLen(); },
        get isFinal() { return _isFinal(); },
        get list() { return _list; },
        get current() { return _getCurrent(); },
        get currentIndex() { return currentIndex; },
        get changedHandlerList() { return _handlerList; },
    }
})();


const style = (function () {
    const rules = [...document.styleSheets[0].cssRules];
    /**
     * 
     * @param {StageData} s 
     */
    function _buildStage(s) {
        //json
        const j = s.style;
        const list = [
            new elem("#bb-pad__base", "--paddleBaseColor", j.paddleBaseColor),
            new elem("#bb-pad__core", "--paddleCoreColor", j.paddleCoreColor),
            new elem("#bb-pad__symbol", "--paddleStrokeColor", j.paddleStrokeColor),
            new elem(".bb-ball--penetration", "--ballPenetrationColor", j.ballPenetrationColor),
            new elem(".bb-tail-effect--penetration", "--strokeColor", j.ballPenetrationColor),
            new elem(".bb-ball", "--ballStrokeColor", j.ballStrokeColor),
            new elem(".bb-tail-effect--penetration", "--strokeColor", j.ballPenetrationColor),
            new elem("#bb-block-overlay__fill", "--blockFillColor", j.blockFillColor),
            new elem(".bb-block-overlay__stroke", "--blockStrokeColor", j.blockStrokeColor),
            new elem("#bb2021", "--backgroundColor", j.backgroundColor),
            new elem("text:not(defs text)", "--textColor", j.textColor),
            new elem("#bb-item-gauge", "--itemGaugeFillColor", j.itemGaugeFillColor),
            new elem("#bb-open-config-button", "--configButtonX", j.configButtonX),
        ];
        list.forEach(e => {
            rules.find((rule => rule.selectorText === e.selector))
                .style.setProperty(e.cssVar, e.value);
        });
        //ユーザーがボールの色を自分で見やすく調整しているならばこちらでは色を変えない。
        if (!_isUserOperatedBallColor) {
            _setBallColor(j.ballColor);
        }
        if (!_isUserOperatedBlockVisibility) {
            _setIsBlockVisible(j.isBlockVisible);
        }
        if (!_isUserOperatedMaskType) {
            _setIsBezierMaskEnabled(j.isBezierMaskEnabled);
        }

        _ballColorChangedHandler.forEach(h => h());
    }
    class elem {
        /**@type{String} */
        selector;
        /**@type{String} */
        cssVar;
        /**@type{String} */
        value;
        /**
         * @param {String} selector 
         * @param {String} cssVar 
         * @param {String} value 
         */
        constructor(selector, cssVar, value) {
            this.selector = selector;
            this.cssVar = cssVar;
            this.value = value;
        }
    }

    // ユーザー操作で変えられるパラメータは特別扱い
    // 一緒にtail colorも変える
    const _ballColorChangedHandler = [];
    const _ballColorStyle = rules
        .find((rule => rule.selectorText === ".bb-ball")).style;
    const _tailEffectStyle = rules
        .find(rule => rule.selectorText === ".bb-tail-effect").style;
    let _isUserOperatedBallColor = false;
    function _getBallColor() {
        return _ballColorStyle.getPropertyValue("--ballColor");
    }
    function _setBallColor(value) {
        _ballColorStyle.setProperty("--ballColor", value);
        _tailEffectStyle.setProperty("--strokeColor", value);
        _ballColorChangedHandler.forEach(h => h());
    }

    const _blockVisibilityChangedHandler = [];
    const _overlayContainer = document.getElementById("bb-block-overlay-container");
    let _isUserOperatedBlockVisibility = false;
    function _getIsBlockVisible() {
        return _overlayContainer.style.visibility === "visible";
    }
    function _setIsBlockVisible(value) {
        _overlayContainer.style.visibility =
            value ? "visible" : "hidden";
        _blockVisibilityChangedHandler.forEach(h => h());
    }

    const _maskTypeChangedHandler = [];
    const foreground_bezier_edge = document.getElementById("bb-foreground--bezier-edge");
    const foreground_bezier_core = document.getElementById("bb-foreground--bezier-core");
    const foreground_rect = document.getElementById("bb-foreground--rect");
    let _isUserOperatedMaskType = false;
    function _getIsBezierMaskEnabled() {
        return foreground_bezier_edge.style.visibility === "visible";
    }
    function _setIsBezierMaskEnabled(value) {
        foreground_bezier_edge.style.visibility = value ? "visible" : "hidden";
        foreground_bezier_core.style.visibility = value ? "visible" : "hidden";
        foreground_rect.style.visibility = value ? "hidden" : "visible";
        _maskTypeChangedHandler.forEach(h => h());
    }
    return {
        buildStage: _buildStage,
        ballColorChangedHandler: _ballColorChangedHandler,
        get ballColor() { return _getBallColor(); },
        set ballColor(value) {
            _setBallColor(value);
            _isUserOperatedBallColor = true;
        },
        blockVisibilityChangedHandler: _blockVisibilityChangedHandler,
        get isBlockVisible() { return _getIsBlockVisible(); },
        set isBlockVisible(value) {
            _setIsBlockVisible(value);
            _isUserOperatedBlockVisibility = true;
        },
        maskTypeChangedHandler: _maskTypeChangedHandler,
        get isBezierMaskEnabled() { return _getIsBezierMaskEnabled(); },
        set isBezierMaskEnabled(value) {
            _setIsBezierMaskEnabled(value);
            _isUserOperatedMaskType = true;
        }
    }
})();


/**x座標での長さをy座標での長さに変換する */
const x2y = function (x) {
    return x / stages.current.aspectRatio;
}
/**y座標での長さをx座標での長さに変換する */
const y2x = function (y) {
    return y * stages.current.aspectRatio;
}

const interp1 = function (x1, y1, x2, y2, x) {
    const slope = (y2 - y1) / (x2 - x1);
    const inter = y1 - slope * x1;
    return slope * x + inter;
}

const length = function (x, y) {
    return Math.sqrt(x ** 2 + y ** 2);
}

const dist = function (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const cointoss = function () {
    return Math.random() < 0.5;
}

/**クランプ処理を行う
 * @param {number} v 対象の値
 * @param {number} min
 * @param {number} max */
const clamp = function (v, min, max) {
    return Math.min(max, Math.max(min, v));
}

/**
 * @param {number} min 
 * @param {number} max 
 * @returns min以上max未満の小数
 */
const getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
}

/** 
 * @param {number} min 
 * @param {number} max 
 * @returns min以上max未満の整数
 */
const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const cursor = (function () {

    let _x = 0.5;
    let _y = 0.5;

    // _x,_yをマウスもしくはタッチイベント毎に更新する。
    {
        const _gameAreaElem = document.getElementById("bb2021");
        //for mouse
        //呼び出される関数がpreventDefaultを呼ぶならfalse
        _gameAreaElem.addEventListener("mousemove", (e) => {
            _x = e.offsetX / _gameAreaElem.clientWidth;
            _y = e.offsetY / _gameAreaElem.clientHeight;
        }, { passive: true });
        //for touch
        _gameAreaElem.addEventListener("touchmove", _touchEvent, { passive: false });
        _gameAreaElem.addEventListener("touchstart", _touchEvent, { passive: false });
        function _touchEvent(e) {
            e.preventDefault();
            //e.targetだとpaddleの上をタッチしたときなどに狂う
            const rect = e.currentTarget.getBoundingClientRect();
            let x = 0;
            let y = 0;
            for (let i = 0; i < e.targetTouches.length; i++) {
                x = x + e.targetTouches[i].clientX;
                y = y + e.targetTouches[i].clientY;
            }
            //x is mean of client x
            x = x / e.targetTouches.length;
            y = y / e.targetTouches.length;
            //scrollXとpageXOffsetは常に同一値
            //pageXOffsetは非推奨
            // x is same as e.offsetX
            x = x - window.scrollX - rect.left;
            y = y - window.scrollY - rect.top;
            _x = x / _gameAreaElem.clientWidth;
            _y = y / _gameAreaElem.clientHeight;
        }
    }

    return {
        get x() { return _x; },
        get y() { return _y; },
    }
})();


/**
 * combo数を管理し、適切なタイミングでコンボ数表示を行う。
 */
const comboCounter = (function () {
    // combo数のインクリメントはブロックを破壊したときに行う。
    let _cnt = 0;
    const _textInterval = 10;
    function _reset() {
        _cnt = 0;
    }
    /**
     * ブロックを破壊したときに呼ぶ
     * @param {*} x テキストを表示する位置（X)
     * @param {*} y テキストを表示する位置（Y)
     */
    function _increment(x, y) {
        _cnt++;
        if (_cnt % _textInterval == 0) {
            _dispComboText(x, y);
        }
    }
    const _containerElem = document.getElementById("bb-combo-text-container");
    const _removeTiming = 2000;//[ms]
    function _dispComboText(x, y) {
        //templateを使うほどではなさそう
        const elem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        elem.textContent = `${_cnt}combo!`;
        elem.classList.add("bb-combo-text");
        elem.setAttribute("x", `${x * 100}%`);
        elem.setAttribute("y", `${y * 100}%`);
        _containerElem.appendChild(elem);
        setTimeout(() => {
            _containerElem.removeChild(elem);
        }, _removeTiming)
    }
    return {
        reset: _reset,
        increment: _increment,
    }
})();


const blockEffecter = (function () {

    const container = document.getElementById("bb-block-effect-container");

    async function _popAllAsync() {
        const nRow = stages.current.nRow;
        const nCol = stages.current.nCol;
        const blockW = 1 / nCol * 100;//%
        const blockH = x2y(blockW);

        const frameRatio = Math.max(Math.floor(nRow * nCol / 250), 1);

        let cnt = 0;
        let animationPromiseList = [];
        for (let r = 0; r < nRow; r++) {
            for (let c = 0; c < nCol; c++) {
                if (!blocks.isExist(r, c)) { continue; }
                //ループを時折遅らせるためのPromise
                await new Promise((res, rej) => {
                    const eachElem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    eachElem.setAttribute("x", `${c * blockW}%`);
                    eachElem.setAttribute("y", `${r * blockH}%`);
                    eachElem.setAttribute("width", `${blockW}%`);
                    eachElem.setAttribute("height", `${blockH}%`);
                    eachElem.classList.add("bb-block-pop-effect__elem");
                    // 追加と削除のタイミングがかぶる可能性があるので遅くなると思ったが、
                    // そんなでもない。
                    const animPromise = new Promise((aniRes, rej) => {
                        eachElem.addEventListener("animationend", () => {
                            container.removeChild(eachElem);
                            aniRes();
                        });
                    });
                    animationPromiseList.push(animPromise);
                    container.appendChild(eachElem);
                    cnt++;
                    if (cnt % frameRatio == 0) {
                        requestAnimationFrame(() => {
                            res();
                        })
                    } else {
                        res();
                    }
                });
            }
        }
        return Promise.all(animationPromiseList);
    }
    function _shine(r, c) {
        const nCol = stages.current.nCol;
        const blockW = 1 / nCol * 100;//%
        const blockH = x2y(blockW);
        const eachElem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        eachElem.setAttribute("x", `${c * blockW}%`);
        eachElem.setAttribute("y", `${r * blockH}%`);
        eachElem.setAttribute("width", `${blockW}%`);
        eachElem.setAttribute("height", `${blockH}%`);
        eachElem.classList.add("bb-block-shine-effect__elem");
        eachElem.addEventListener("animationend", () => {
            container.removeChild(eachElem);
        })
        container.appendChild(eachElem);
    }
    /**  
     * ステージクリア時のブロックを消す処理
     * リッチなエフェクト付き処理を行う。処理が煩雑になるかもなのでここで一括管理する。
     */
    async function _hideAllAsync() {
        //以前はリッチな処理を非同期で行っていたが、いまはたいしたことはしていない。
        const imElem = document.getElementById("bb-masked-foreground");
        const overlayElem = document.getElementById("bb-block-overlay-container");
        imElem.classList.add("bb-foreground-mask--hide--rich");
        overlayElem.classList.add("bb-block-overlay--hide--rich");
    }

    function _reset() {
        const imElem = document.getElementById("bb-masked-foreground");
        const overlayElem = document.getElementById("bb-block-overlay-container");
        imElem.classList.remove("bb-foreground-mask--hide--rich");
        overlayElem.classList.remove("bb-block-overlay--hide--rich");
    }
    return {
        popAllAsync: _popAllAsync,
        shine: _shine,
        hideAllAsync: _hideAllAsync,
        reset: _reset,
    }
})();


const ballHideEffector = (function () {
    const svgElem1 = document.getElementById("bb-ball-container");
    const svgElem2 = document.getElementById("bb-tail-effect-container");

    // いずれもOpacityによりBallコンテナを見えなくするクラス。
    // どちらかでもついていたら見えなくなる。
    const blinkCssClassName = "bb-ball-container--blink";
    const eventCssClassName = "bb-ball-container--hide-event";

    function _hideForBlink() {
        //重複排除は自動でしてくれる。
        svgElem1.classList.add(blinkCssClassName);
        svgElem2.classList.add(blinkCssClassName);
    }
    function _revealForBlink() {
        svgElem1.classList.remove(blinkCssClassName);
        svgElem2.classList.remove(blinkCssClassName);
    }
    function _hideForEvent() {
        svgElem1.classList.add(eventCssClassName);
        svgElem2.classList.add(eventCssClassName);
    }
    function _revealForEvent() {
        svgElem1.classList.remove(eventCssClassName);
        svgElem2.classList.remove(eventCssClassName);
    }
    function _reset() {
        svgElem1.classList.remove(blinkCssClassName);
        svgElem1.classList.remove(eventCssClassName);
        svgElem2.classList.remove(blinkCssClassName);
        svgElem2.classList.remove(eventCssClassName);
    }
    return {
        hideForBlink: _hideForBlink,
        revealForBlink: _revealForBlink,
        hideForEvent: _hideForEvent,
        revealForEvent: _revealForEvent,
        reset: _reset,
    }
})();


/**"SoundManager" */
const sm = (function () {
    const _ctx = new AudioContext();
    // iPhoneではAlertやConfirmを読んだときにsuspendされるぽい？
    // これをすると別タブに行った時も止まらなくなる。
    // _ctx.addEventListener("statechange", _ctx.resume);


    // まずはFetchする。awaitはステージ毎に行う
    /**@type {{[key:string]:Promise<AudioBuffer>}} */
    let _resourceDict = {};
    (function _loadResource() {
        // DATA URLでエンコーディングされた音声データ
        const _urlTextList = ep.soundResourceList
        for (const urlText of _urlTextList) {
            _resourceDict[urlText.name] = fetch(urlText.url)
                .then(response => response.arrayBuffer())
                .then(buf => _ctx.decodeAudioData(buf));
        }
    })();


    // 自動再生ポリシー対策
    // タッチ時に再生する処理を行う。
    // main側では音楽が再生されていないと処理が進まないようにしてある。
    {
        const touchTarget = document.getElementById("bb2021");
        //for iOS
        touchTarget.addEventListener("touchend", _begin);
        //for PC (サーバー起動すれば不要だがローカルファイルだと必要)
        touchTarget.addEventListener("click", _begin);
        function _begin() {
            _ctx.resume();
        }
    }
    function _isPlaying() {
        return _ctx.state === "running";
    }


    /**@type {{BGM:AudioBuffer, ItemSe:AudioBuffer, PadSe:AudioBuffer, WallSe:AudioBuffer, HoldoffSe:AudioBuffer, FailSe:AudioBuffer, StageClearSe:AudioBuffer, GameClearSe:AudioBuffer}}*/
    let _seDict = {};
    /**
     * SEリストをいまのステージ用に更新する。
     * BGMをスタートする。
     * @param {StageData} stageData 
     */
    async function _buildStageAsync(stageData) {
        const bgmKey = stageData.soundList.BGM;
        if (bgmKey !== "") {
            await _bgm.startAsync(bgmKey);
        }

        for (const soundname in stageData.soundList) {
            const key = stageData.soundList[soundname];
            if (key === "") { continue; }
            _seDict[soundname] = await _resourceDict[key];
        }
    }




    const _bgm = (function () {
        // Nodeが使い捨てなので
        // 再生中の状態かkillされた状態しか持たない

        let _key = "";
        const _bgmGainNode = new GainNode(_ctx);
        _bgmGainNode.connect(_ctx.destination);
        let _bgmNode = new AudioBufferSourceNode(_ctx);//null対策初期化
        _bgmNode.start();// startしないとstopを呼べない

        /**
         * BGMを変更してスタートする。
         * いままでと一緒のBGMならばそのままにする。
         * @param {string} bgmKey 
         * @returns 
         */
        async function _startAsync(bgmKey) {
            if (_key === bgmKey) { return; }
            const buf = await _resourceDict[bgmKey];
            _bgmNode.stop();

            _bgmNode = new AudioBufferSourceNode(_ctx, {
                buffer: buf, loop: true
            });
            _bgmNode.connect(_bgmGainNode);
            _bgmNode.start();
        }
        function _kill() {
            _bgmNode.stop();
        }

        return {
            startAsync: _startAsync,
            kill: _kill,
            get gain() { return _bgmGainNode.gain; }
        }
    })();




    let _seGainNode = new GainNode(_ctx);
    _seGainNode.connect(_ctx.destination);
    function _playSeAsync(soundname) {
        // https://developer.mozilla.org/ja/docs/Web/API/AudioBufferSourceNode
        // AudioBufferSourceNode は一度しか再生できません。
        // つまり、同じ音を再び再生したいのであれば、 start() を呼び出すたびに新しいノードを作成する必要があります。
        // 幸いなことに、これらのノードはとても安価に作成でき、実際の AudioBuffer は複数回のサウンド再生に再利用することができます。
        // 実際、これらのノードは「使い捨て」で使用することができます。
        // ノードを作成し、 start() を呼び出して音の再生を始め、わざわざそのノードの参照を保持する必要はないでしょう。
        // このノードは適切なタイミングで自動的にガベージコレクションされますが、それはサウンドの再生が完了した後しばらくしてからになります。

        //iPhoneにて自動再生ポリシーで再生中止しているNodeがたまり、
        // 再生始まった瞬間に一気に再生されるのを防ぐ。
        if (_ctx.state === "suspended") {
            return;
        }
        if (_seLimiter.isLimited(soundname)) { return; }
        _seLimiter.limit(soundname);
        return new Promise(resolve => {
            const sourceNode = new AudioBufferSourceNode(_ctx, {
                buffer: _seDict[soundname],
            });
            sourceNode.connect(_seGainNode);
            sourceNode.addEventListener("ended", resolve);
            sourceNode.start();
        });
    }

    /**
     * イベント用のリソースキー引数のやつ
     * @param {string} key リソースキー
     * @returns 
     */
    async function _callSeAsync(key) {
        return new Promise(async (resolve) => {
            if (_ctx.state === "suspended") { resolve(); return; }
            const sourceNode = new AudioBufferSourceNode(_ctx, {
                buffer: await _resourceDict[key],
            });
            sourceNode.connect(_seGainNode);
            sourceNode.addEventListener("ended", resolve);
            sourceNode.start();
        });
    }

    const _seLimiter = (function () {
        const map = new Map();
        _loop();

        function _loop() {
            map.clear();

            // フレームレートによる定義よりも実時間に対する定義の方が好ましいが、
            // なぜかiPhoneで動かなくなったのでやむなし
            // setInterval(_loop, 150);
            requestAnimationFrame(_loop);
        }
        function _limit(key) {
            map.set(key, true);
        }
        /**
         * @param {string} key 
         * @returns {boolean|undefined}
         */
        function _isLimited(key) {
            return map.get(key);
        }
        return {
            limit: _limit,
            isLimited: _isLimited,
        }
    })();

    /**
     * 
     * @param {string} key リソースキー
     * @param {string} type サウンド種類
     * @returns 
     */
    async function _changeSoundAsync(key, type) {
        if (type === "BGM") {
            return _bgm.startAsync(key);
        }

        _seDict[type] = await _resourceDict[key];
    }
    return {
        callItemSeAsync() { return _playSeAsync("ItemSe"); },
        callPadSeAsync() { return _playSeAsync("PadSe"); },
        callWallSeAsync() { return _playSeAsync("WallSe"); },
        callHoldoffSeAsync() { return _playSeAsync("HoldoffSe"); },
        callFailSeAsync() { return _playSeAsync("FailSe"); },
        callStageClearSeAsync() { return _playSeAsync("StageClearSe"); },
        callGameClearSeAsync() { return _playSeAsync("GameClearSe"); },
        killBgm: _bgm.kill,
        buildStageAsync: _buildStageAsync,
        // for event
        callSeAsync: _callSeAsync,
        changeSoundAsync: _changeSoundAsync,
        // iPhone対応のため
        // AlertやConfirmのあと呼ぶ
        resumeAudioContext() { return _ctx.resume(); },
        get isPlaying() { return _isPlaying(); },
        /** @param {number} value */
        set bgmScale(value) { _bgm.gain.setValueAtTime(value, _ctx.currentTime); },
        /** @param {number} value */
        set seScale(value) { _seGainNode.gain.setValueAtTime(value, _ctx.currentTime); },
    }
})();


// js読み込み時
// // Resourceを全てFetchしてロードする。
// // タッチするたびに_ctx.resume()を呼ぶ

// buildStage時
// // BGMをスタートする。killするまで止まらない。
// // 音楽再生をawaitして、音楽が流れるまでゲーム開始を待つ。

// ゲームクリア時
// // BGMをkillする



// stages.currentを勝手に見に行く。injectの必要なし

/**落ちてくるアイテムの基底クラス */
class DropItem {
    static width = 0.10;
    static get height() { return x2y(DropItem.width); }
    static #gElement = document.getElementById("bb-dropitem-container");
    static get #defaultVy() { return 0.0004; }//[/ms]

    x;//in center
    y;
    vy = DropItem.#defaultVy
    prev;
    next;
    svgElement;
    isInstant;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        this.svgElement.setAttribute("width", `${DropItem.width * 100}%`);
        this.svgElement.setAttribute("height", `${DropItem.height * 100}%`);
        this.svgElement.style.transform = `translate(${(this.x - DropItem.width / 2) * 100}%,${(this.y - DropItem.height / 2) * 100}%)`;
        DropItem.#gElement.appendChild(this.svgElement);
    }
    /**HTML要素を削除する */
    destruct() { this.svgElement.remove(); }
    /**位置を下に動かす */
    step(dt) {
        this.y += this.vy * dt;
        this.svgElement.style.transform = `translate(${(this.x - DropItem.width / 2) * 100}%,${(this.y - DropItem.height / 2) * 100}%)`;
    }
    /**padとの衝突判定
     * @param {object} pad パドル
     * @param {number} dt  [ms]
     * @return {boolean} いまからdt以内にpadに衝突するならばtrue */
    isHit(pad, dt) {
        if (!(this.#top < pad.top && pad.top < this.#bottom + this.vy * dt)) return false;
        const xDist = Math.abs(this.x - pad.x);
        return xDist <= (pad.width + DropItem.width) / 2;
    }
    /**アイテムの効果を起動する */
    activate() {
        console.log("This is dummy. DropItem activate is called.");
    }
    /**表示領域に存在するかの判定
     * @return {boolean}*/
    get inViewbox() { return this.#top < 1; }
    get #top() { return this.y - DropItem.height / 2; }
    get #bottom() { return this.y + DropItem.height / 2; }

    static needExplanation = true;
    /**
     * アイテム説明用ダイアログを表示する。
     * @param {HTMLElement} dialog popoverが実装されたDialogとして使用するElem
     */
    static showExplanationDialog(dialog) {
        if (!this.needExplanation) { return; }
        game.Loop.pause();
        dialog.addEventListener("toggle", (e) => {
            if (e.newState === "closed") {
                game.Loop.resume();
            }
        });
        //iPhoneだとタッチ状況が変わるとすぐPopoverが消えてしまうが、
        //beforeToggleイベントにキャンセルがないのでどうしようもない。
        dialog.showPopover();
    }
}

class DropItem_Instant extends DropItem {
    constructor(x, y) {
        super(x, y);
        this.isInstant = true;
    }
}

class DropItem_Continuous extends DropItem {
    constructor(x, y) {
        super(x, y);
        this.isInstant = false;
    }
}

//それぞれのUsingItemでクラスを作るとDropItemと混ざってややこしい．
//DropItem.activateにそれぞれのUsingItemを生成させる．
/**
 * 効果時間を持ったアイテムを表すクラス．
 * コンストラクタでふるまいを与える．
 */
class UsingItem {
    #name;
    #sumT = 0;
    #tLim = 0;
    #tickInternal = (dt, sumT) => { ; };//tickはもともとある．これは追加分のもの
    /**アイテムの情報，ふるまいを注入する． */
    constructor({ name, tLim, firstAction, tick, beforeCollisionAction, destruct }) {
        this.#name = name;
        this.#tLim = tLim;
        if (firstAction !== undefined) this.firstAction = firstAction;
        if (tick !== undefined) this.#tickInternal = tick;
        if (beforeCollisionAction) this.beforeCollisionAction = beforeCollisionAction;
        if (destruct !== undefined) this.destruct = destruct;
    }
    get name() { return this.#name; }
    firstAction() { ; }
    /**
     * @param {number} dt
     * @return {number} 現在のゲージ割合(0-1)
     *  */
    tick(dt) {
        this.#sumT += dt;
        this.#tickInternal(dt, this.#sumT);
        return 1 - (this.#sumT / this.#tLim);
    }
    beforeCollisionAction() { ; }
    destruct() { ; }
    static GenerateNoItem() {
        const ui = new UsingItem({
            name: "no item",
            tLim: 0,
        });
        ui.tick = () => { return 1; };
        return ui;
    }
}

class OneupItem extends DropItem_Instant {
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-1up-icon");
    }
    activate() {
        game.stock++;
        svgm.setStockText(game.stock);
    }
}

// 貫通弾
// 受け取った瞬間から球が貫通弾になり，時間制限まで貫通弾の状態を維持する．
// 時間制限を超えても貫通状態は維持されるが，パドルによって貫通弾ではなくなる．
class PiercingItem extends DropItem_Continuous {
    static name = "Piercing";
    static get #tLim() {
        return stages.current.itemList.Piercing.TLim;//[ms]
    }
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-piercing-icon");
        super.isInstant = false;
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: PiercingItem.name,
            tLim: PiercingItem.#tLim,
            firstAction() {
                bm.gotoHead();
                while (bm.nowNode !== null) {
                    bm.nowNode.mode = Ball.modeTypes.penetration;
                    bm.gotoNext();
                }
            },
        });
    }
}

// ボール増加
// ボールの数がN倍になる
// ボール数の制限はballManager側で行う
class ManyItem extends DropItem_Instant {
    static get #N() { return stages.current.itemList.Many.N; }
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-many-icon");
    }
    activate() {
        bm.gotoHead();
        while (bm.nowNode !== null) {
            if (!bm.canAdd) return;
            let v = length(bm.nowNode.v.x, y2x(bm.nowNode.v.y));//in x axis
            for (let i = 0; i < ManyItem.#N - 1; i++) {
                const newBall = new Ball(
                    bm.nowNode.x, bm.nowNode.y,
                    bm.nowNode.v.x, bm.nowNode.v.y);
                newBall.v.rotateToRandom();
                if (uim.usingItem.name === BigballItem.name) {
                    newBall.setSvgR(bm.nowNode.svgr);
                }
                bm.add(newBall);
            }
            bm.gotoNext();
        }
    }
}

class WideItem extends DropItem_Continuous {
    static name = "Wide";
    static get #padWidth() { return stages.current.itemList.Wide.Width; }
    static get #tLim() {
        return stages.current.itemList.Wide.TLim;//[ms]
    }
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-wide-icon");
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: WideItem.name,
            tLim: WideItem.#tLim,
            firstAction() {
                pad.width = WideItem.#padWidth;
            },
            destruct() {
                pad.setWidthByDefault();
            },
        });
    }
}

class ShortItem extends DropItem_Continuous {
    static name = "Short";
    static get #padWidth() { return stages.current.itemList.Short.Width; }
    static get #tLim() {
        return stages.current.itemList.Short.TLim;//[ms]
    }
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-short-icon");
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: ShortItem.name,
            tLim: ShortItem.#tLim,
            firstAction() {
                pad.width = ShortItem.#padWidth;
            },
            destruct() {
                pad.setWidthByDefault();
            },
        });
    }
}

class BlinkItem extends DropItem_Continuous {
    static name = "Blink";
    static get #tLim() {
        return stages.current.itemList.Blink.TLim;//[ms]
    }
    static get #visibleTime() { return stages.current.itemList.Blink.VisibleTime; }
    static get #hiddenTime() { return stages.current.itemList.Blink.HiddenTime; }
    static get #T() { return BlinkItem.#visibleTime + BlinkItem.#hiddenTime; }
    static #firstTime = true;
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-blink-icon");
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: BlinkItem.name,
            tLim: BlinkItem.#tLim,
            firstAction() {
                if (!BlinkItem.#firstTime) { return; }
                BlinkItem.#firstTime = false;
                DropItem.showExplanationDialog(
                    document.getElementById("bb-blink-explanation-dialog")
                );
            },
            tick(dt, sumT) {
                const modT = sumT % BlinkItem.#T;
                const visible = modT <= BlinkItem.#visibleTime;
                if (visible) {
                    ballHideEffector.revealForBlink();
                } else {
                    ballHideEffector.hideForBlink();
                }
            },
            destruct() {
                ballHideEffector.revealForBlink();
            }
        })
    }
}


class BigballItem extends DropItem_Continuous {
    static name = "Big ball";
    static get #tLim() {
        return stages.current.itemList.Big.TLim;//[ms]
    }
    static get #bigSvgR() { return stages.current.itemList.Big.Radius; }
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-bigball-icon");
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: BigballItem.name,
            tLim: BigballItem.#tLim,
            firstAction() {
                bm.gotoHead();
                while (bm.nowNode !== null) {
                    bm.nowNode.setSvgR(BigballItem.#bigSvgR);
                    bm.gotoNext();
                }
                bm.gotoHead();
                while (bm.nowNode !== null) {
                    let b = bm.nowNode;//ball
                    const nRow = blocks.nRow;
                    const nCol = blocks.nCol;
                    const bBound = blocks.bBound;
                    //leftなどが乗っているブロックのインデックス
                    let xBegin = Math.floor(b.left * nCol);
                    let xEnd = Math.floor(b.right * nCol);
                    let yBegin = Math.floor(b.top / bBound * nRow);
                    let yEnd = Math.floor(b.bottom / bBound * nRow);
                    xBegin = clamp(xBegin, 0, nCol - 1);
                    yBegin = clamp(yBegin, 0, nRow - 1);
                    xEnd = clamp(xEnd, 0, nCol - 1);
                    yEnd = clamp(yEnd, 0, nRow - 1);
                    for (let x = xBegin; x <= xEnd; x++) {//<=attention!
                        for (let y = yBegin; y <= yEnd; y++) {
                            game.hitBlock(y, x, 999);
                        }
                    }
                    bm.gotoNext();
                }
            },
            destruct() {
                bm.gotoHead();
                while (bm.nowNode !== null) {
                    bm.nowNode.setSvgR();
                    bm.gotoNext();
                }
            }
        })
    }
}


class CtrlItem extends DropItem_Continuous {
    static name = "Ctrl";
    static get #tLim() {
        return stages.current.itemList.Ctrl.TLim;//[ms]
    }
    static get g() {
        return stages.current.itemList.Ctrl.G / 1000;//[/s/s]
    }
    static #firstTime = true;
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-ctrl-icon");
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: CtrlItem.name,
            tLim: CtrlItem.#tLim,
            firstAction() {
                if (!CtrlItem.#firstTime) { return; }
                CtrlItem.#firstTime = false;
                DropItem.showExplanationDialog(
                    document.getElementById("bb-ctrl-explanation-dialog")
                );
            },
            beforeCollisionAction() {
                bm.gotoHead();
                while (bm.nowNode !== null) {
                    bendBallPath(bm.nowNode);
                    bm.gotoNext();
                }
                /** @param {Ball} b */
                function bendBallPath(b) {
                    const g = CtrlItem.g;
                    //cursorとボールの距離L、LのX成分Y成分
                    const lx = cursor.x - b.x;
                    const ly = cursor.y - b.y;
                    const ly_x = y2x(ly);
                    const l = length(lx, ly_x);
                    //等速円運動のための加速度g
                    const gx = lx / l * g;
                    const gy = ly_x / l * g;

                    const bvy_x = y2x(b.v.y);
                    //gにより増加したボール速度
                    const vx = b.v.x + gx;
                    const vy = y2x(b.v.y) + gy;

                    //距離が円運動よりも遠い距離だと加速運動になってしまう。
                    //正規化して等速運動にする
                    const vo = length(b.v.x, bvy_x);
                    const v = length(vx, vy);
                    b.v.x = vx / v * vo;
                    b.v.y = x2y(vy / v * vo);
                }
            },
            destruct() {
                //Y方向速度が0になってしまうのを防ぐ
                bm.gotoHead();
                while (bm.nowNode !== null) {
                    if (Math.abs(bm.nowNode.v.y) < 0.00001) {
                        bm.nowNode.v.y = 0.00001;
                    }
                    bm.gotoNext();
                }
            }
        });
    }
}

class FlashItem extends DropItem_Continuous {
    static name = "Flash";
    /**効果の継続時間 */
    static get #tLim() {
        return stages.current.itemList.Flash.TLim;//[ms]
    }
    /**速度の倍率 */
    static get #N() {
        return stages.current.itemList.Flash.N;
    }
    static overlayElem = document.getElementById("bb-flash-overlay");
    constructor(x, y) {
        super(x, y);
        this.svgElement.setAttribute("href", "#bb-flash-icon");
    }
    activate() {
        uim.usingItem = new UsingItem({
            name: FlashItem.name,
            tLim: FlashItem.#tLim,
            destruct() {
                game.State.isFlashMode = false;
                Velocity.flashScale = 1;
                TailEffector.flashMode = false;
                const endAnim = FlashItem.overlayElem.animate(
                    [{ "fill": "rgb(10,130,200,0)" }],
                    { duration: 300, fill: "forwards" }
                );
                endAnim.onfinish = () => {
                    endAnim.commitStyles();
                    endAnim.cancel();
                }
            }
        });
        bm.turnOffPenetrationAll();
        game.Loop.pause();
        const beginAnim = FlashItem.overlayElem.animate(
            // opacity指定がなんかうまくいかなかった
            [{ "fill": "rgb(10,130,200,0.2)" }],
            { duration: 300, fill: "forwards" });
        beginAnim.onfinish = () => {
            beginAnim.commitStyles();
            beginAnim.cancel();
            game.State.isFlashMode = true;
            Velocity.flashScale = FlashItem.#N;
            TailEffector.flashMode = true;
            game.Loop.resume();
        };
    }
}




/**UsingItemManager
 * 現在使っているアイテムを管理するオブジェクト*/
const uim = (function () {
    let _usingItem = UsingItem.GenerateNoItem();
    let _gauge = 1;
    const groupElem = document.getElementById("bb-item-gauge-group");
    const activatedClassName = "bb-item-gauge--activated";
    const gaugeElem = document.getElementById("bb-item-gauge");
    gaugeElem.style.transformOrigin = gaugeElem.x.baseVal.valueAsString;

    // HTMLに手書きしたRectElemのWidthプロパティ値を取得する。
    const gaugeWidth = Number(gaugeElem.getAttribute("width").replace("%", ""));

    return {
        get usingItem() { return _usingItem; },
        set usingItem(item) {
            _usingItem.destruct();
            _usingItem = item;
            this.gauge = 1;
            document.getElementById("bb-item-name").textContent = _usingItem.name;
            if (_usingItem.name === "no item") {
                groupElem.classList.remove(activatedClassName);
            } else {
                groupElem.classList.add(activatedClassName);
            }
            //firstActionでダイアログを出すのでその前にアイテム名などは変えておきたい。
            _usingItem.firstAction();
        },
        /**@param {number} value */
        set gauge(value) {
            if (_gauge === value) return;
            _gauge = Math.max(value, 0);
            gaugeElem.setAttribute("width", `${gaugeWidth * _gauge}%`);
            if (_gauge <= 0) this.setNoItem();
        },
        setNoItem() {
            this.usingItem = UsingItem.GenerateNoItem();
        },
        /**@param {number} dt */
        tick(dt) {
            const nowGauge = _usingItem.tick(dt);
            this.gauge = nowGauge;
        },
        beforeCollisionAction() {
            _usingItem.beforeCollisionAction();
        }
    }
})();

/**DropItemManager
 * 落ちてくるアイテムを管理するオブジェクト*/
const dim = (function () {
    // null=>node=>node=>...=>null
    //private
    /** @type{DropItem} */
    let _head = null;
    /**先頭にノードを追加する
     * @param {DropItem} newNode 追加対象*/
    function _add(newNode) {
        // newNodeの前後を指定
        newNode.next = _head;
        newNode.prev = null;
        // _headの指示先を変更
        _head = newNode;
        // 押し下げられたノードのprev変更
        if (newNode.next !== null) newNode.next.prev = newNode;
    }
    /**ノードを削除する
     * @param {DropItem} target 削除対象*/
    function _delete(target) {
        target.destruct();
        if (target.prev === null && target.next === null) {
            //target is 1st node ans last node
            _head = null;
        } else if (target.prev === null) {
            //target is 1st node
            _head = target.next;
            target.next.prev = null;
        } else if (target.next === null) {
            //target is last node
            target.prev.next = target.next;
        } else {
            target.prev.next = target.next;
            target.next.prev = target.prev;
        }
    }
    //public
    return {
        addNewItem(x, y) {
            const isLucky = dig.RollTheDice();
            if (!isLucky) { return; }
            const newItem = dig.GetNewItem(x, y);
            _add(newItem);
        },
        addItem(item) {
            _add(item);
        },
        /**全てのDropItemを下に進めて衝突判定を行う
         * dt[ms]以内に衝突するかどうかを判定する．
         * @param {object} pad パドル
         * @param {number} dt 経過時間[ms]*/
        collision(pad, dt) {
            // 最終的には一番上にあるものと衝突する
            let minY = 1;
            let hitTarget = null;
            let target = _head;
            while (target !== null) {
                if (target.isHit(pad, dt)) {
                    if (target.isInstant && game.State.canGetItem) {
                        target.activate();
                        sm.callItemSeAsync();
                    } else {
                        if (target.y < minY) {
                            minY = target.y;
                            hitTarget = target;
                        }
                    }
                    _delete(target);
                }
                target.step(dt);
                if (!target.inViewbox) _delete(target);
                target = target.next;
            }
            if (hitTarget !== null && game.State.canGetItem) {
                hitTarget.activate();
                sm.callItemSeAsync();
            }
        },
        deleteAll() {
            let target = _head;
            while (target !== null) {
                target.destruct();
                target = target.next;
            }
            _head = null;
        }
    }
})();


/**DropItemGenerator
 * アイテムの発生割合を管理する
 */
const dig = (function () {
    let _items;
    let _popPercent = 0;
    /**
     * @param {StageData} s 
     */
    function _buildStage(s) {
        _items = [
            { ratio: 0, constructor: OneupItem, weight: s.itemList.Oneup.Weight },
            { ratio: 0, constructor: PiercingItem, weight: s.itemList.Piercing.Weight },
            { ratio: 0, constructor: ManyItem, weight: s.itemList.Many.Weight },
            { ratio: 0, constructor: WideItem, weight: s.itemList.Wide.Weight },
            { ratio: 0, constructor: ShortItem, weight: s.itemList.Short.Weight },
            { ratio: 0, constructor: BlinkItem, weight: s.itemList.Blink.Weight },
            { ratio: 0, constructor: BigballItem, weight: s.itemList.Big.Weight },
            { ratio: 0, constructor: CtrlItem, weight: s.itemList.Ctrl.Weight },
            { ratio: 0, constructor: FlashItem, weight: s.itemList.Flash.Weight },
        ];
        let sum = 0;
        for (let i = 0; i < _items.length; i++) {
            sum += _items[i].weight;
        }
        let sumW = 0;
        for (let i = 0; i < _items.length; i++) {
            sumW += _items[i].weight;
            _items[i].ratio = sumW / sum;
        }
        _popPercent = s.itemPopPercent;
    }
    return {
        /**ランダム値がアイテム生成を示すならばtrue */
        RollTheDice() {
            return Math.random() * 100 < _popPercent;
        },
        /**新しくドロップアイテムを生成する */
        GetNewItem(x, y) {
            const rand = Math.random();
            for (let i = 0; i < _items.length; i++) {
                if (rand <= _items[i].ratio) {
                    return new _items[i].constructor(x, y);
                }
            }
            return new _items[_items.length - 1].constructor(x, y);
        },
        buildStage: _buildStage,
        get popPercent() { return _popPercent; },
        set popPercent(value) {
            _popPercent = clamp(_popPercent + value, 0, 100);
        }
    }
})();


/** ロードを担当する． */
const loader = (function () {
    //soundなど，特化したmanagerが他にいるならば，その分野のロードはそちらに任せる．


    // epに基づいてDOMを編集する。
    let _isInitialized = false;
    // deferを前提としてDOMContentLoadedは不要
    (function startup() {
        //全ステージ共通のロード処理を行う

        const wpKey = ep.wallpaperName;
        if (wpKey !== "") {
            var url = ep.imageResourceList
                .find(e => e.name == wpKey).url;
            document.getElementById("bb-wallpaper")
                .setAttribute("href", url);
        }

        document.getElementById("bb-version-text").textContent = `Ver ${ep.bb2021Version}`;
        _isInitialized = true;
    })();



    /**@type {MediaQueryList} */
    let _mql;
    let _mqlHandler;

    /**
     * 各ステージの最初の読み込み処理を行う
     * @param {StageData} s 
     */
    function _loadStage(s) {
        const svgElements = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "svg");
        for (const svgElem of svgElements) {
            if (svgElem.classList.contains("bb-item-explanation--icon")) { continue; }
            svgElem.setAttribute("viewBox", `0,0,1000,${s.aspectRatio * 1000}`);
        }


        if (_mql) {
            _mql.removeEventListener("change", _mqlHandler);
        }
        // width/height
        _mql = window.matchMedia(`(min-aspect-ratio:${1 / s.aspectRatio})`);
        _mqlHandler = (q) => {
            const target = document.getElementById("bb2021");
            if (q.matches) {
                target.style.height = "100%";
                target.style.width = "auto";
            } else {
                target.style.height = "auto";
                target.style.width = "100%";
            }
        };
        _mql.addEventListener("change", _mqlHandler);
        // メディアクエリを即時実行
        _mqlHandler(_mql);



        const nCol = s.nCol;

        // foreground mask (rect)//
        const blockW = 1 / nCol * 100;//%
        const blockH = x2y(blockW);

        // block overlay (line) //
        const horizontalPattern = document.getElementById("bb-block-overlay-pattern__horizontal");
        horizontalPattern.setAttribute("height", `${blockH}%`);
        const verticalPattern = document.getElementById("bb-block-overlay-pattern__vertical");
        verticalPattern.setAttribute("width", `${blockW}%`);


        const padElem = document.getElementById("bb-pad");
        padElem.setAttribute("y", `${s.padY * 100}%`);
        padElem.setAttribute("width", `${s.padW * 100}%`);
        padElem.setAttribute("height", `${s.padH * 100}%`);

        const padCoreElem = document.getElementById("bb-pad__core");
        padCoreElem.setAttribute("x", `${(0.5 - s.padCoreW / 2) * 100}%`);
        padCoreElem.setAttribute("width", `${s.padCoreW * 100}%`);



        // 下から15pt
        const lastRowY = 1000 * s.aspectRatio - 15;
        document.getElementById("bb-stage-text")
            .setAttribute("y", `${lastRowY}`);
        document.getElementById("bb-percent-text")
            .setAttribute("y", `${lastRowY}`);
        document.getElementById("bb-stock-text")
            .setAttribute("y", `${lastRowY}`);


        document.getElementById("bb-item-name")
            .setAttribute("y", `${1000 * s.aspectRatio - 70}`);
        const gaugeClip = document.getElementById("bb-item-gauge-clip__rect");
        gaugeClip.setAttribute("y", `${1000 * s.aspectRatio - 100}`);
        const gaugeBorder = document.getElementById("bb-item-gauge-border");
        gaugeBorder.setAttribute("y", `${1000 * s.aspectRatio - 100}`);
        const scaleElemList = document.getElementsByClassName("bb-item-gauge__scale");
        for (let i = 0; i < 3; i++) {
            const elem = scaleElemList[i];
            // elem.setAttribute("x", `${1000 * (25 + 65 / 4 * (i + 1)) / 100 - 6}`)//固定値
            elem.setAttribute("y", `${1000 * s.aspectRatio - 100 + 30}`);
        }
    }


    /**各ステージに必要な画像をロードする．
     * @param {StageData} s
     * @returns Promise
     */
    async function _loadStageImageAsync(s) {
        const foreImList = document.getElementsByClassName("bb-foreground");
        const backIm = document.getElementById("bb-background");

        //safariだけはhrefが変更前後で同じだとonloadが走らない..
        backIm.setAttribute("href", "");
        for (const element of foreImList) {
            element.setAttribute("href", "");
        }

        return new Promise(async (resolve, _) => {
            // async awaitのおかげでコードの書いてある順番通りに動く
            const foreKey = s.foreImageName;
            const foreUrl = ep.imageResourceList
                .find(e => e.name === foreKey).url;
            const forePromiseList = [];
            for (const foreIm of foreImList) {
                const forePromise = new Promise((res, rej) => {
                    foreIm.onload = res;
                    foreIm.setAttribute("href", foreUrl);
                });
                forePromiseList.push(forePromise);
            }

            const backPromise = new Promise((res, rej) => {
                const backKey = s.backImageName;
                const backUrl = ep.imageResourceList
                    .find(e => e.name === backKey).url;
                backIm.onload = res;
                backIm.setAttribute("href", backUrl);
            });
            await Promise.all(forePromiseList);
            await backPromise;
            for (const foreIm of foreImList) {
                foreIm.onload = () => { };// ハンドラを消さないとイベントで誤爆する   
            }
            backIm.onload = () => { };
            preloader.runAsync();
            resolve();
        });
    }
    return {
        loadStage: _loadStage,
        loadStageImageAsync: _loadStageImageAsync,
        get isInitialized() { return _isInitialized; }
    }
})();


const preloader = (function () {
    // 効くかは知らんがないよりは間違いなくいい
    let isFirstPass = true;

    const dummyElem = document.createElement("img");
    const res = ep.imageResourceList;

    async function _runAsync() {
        if (!isFirstPass) { return; }
        isFirstPass = false;

        for (let i = 0; i < res.length; i++) {
            const url = res[i].url;
            await new Promise((resolve, reject) => {
                dummyElem.onload = resolve;
                dummyElem.setAttribute("src", url);
            })
        }
    }
    return {
        runAsync: _runAsync,
    }
})();

// UXのためにこれらの設定はゲームをリトライしても継続するように実装する。

//あくまでユーザーが各種パラメータを操作するためのコントローラーとしての機能を提供する。
//ここで各種パラメーターをJSからHTMLにロードしたりは避ける。

/**設定メニューの管理を行う */
const configMenu = (function () {
    // dialogよりもpopoverのほうがLightDismissが容易にできる点でよい。
    const _openButton = document.getElementById("bb-open-config-button");
    const _popover = document.getElementById("bb-config-menu");
    const _closeButton = document.getElementById("bb-config-menu__close-button");

    // open & close
    const _openHandler = (e) => {
        // Pause中に開いて、そして閉じてLoop状態をいじるとバグの元
        if (game.Loop.isPausing) { return; }
        e.stopPropagation();
        // open時は押せない？が念のため開閉ボタンにしておく
        _popover.togglePopover();
    };
    const _closeHandler = (e) => {
        e.stopPropagation();
        _popover.hidePopover();
    };
    // PC
    _openButton.addEventListener("click", _openHandler);
    // iPhone
    _openButton.addEventListener("touchend", _openHandler);
    // close
    _closeButton.addEventListener("click", _closeHandler);

    // closed
    _popover.addEventListener("toggle", (e) => {
        if (e.newState === "open") {
            game.Loop.pause();
        } else {
            game.Loop.resume();
        }
    });
    return {}
})();


/**speedFactorの調整機能のUIとのやり取りを行う */
const speedOption = (function () {
    const inputElem = document.getElementById("bb-speed-factor-input");
    const valueElem = document.getElementById("bb-speed-factor-value");
    inputElem.addEventListener("change", () => {
        const value = inputElem.value;
        valueElem.textContent = `${value}倍`;
        Velocity.scale = value;
    })
    return {}
})();


const ballColorOption = (function () {
    const _inputElem = document.getElementById("bb-ball-color-input");
    const _valueElem = document.getElementById("bb-ball-color-value");

    const colorChangedHandler = () => {
        const color = style.ballColor;
        _valueElem.textContent = color;
        //inputは16進数RGBのみ対応している。RGBAはダメなので注意
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
        _inputElem.value = color;
    };
    colorChangedHandler();
    style.ballColorChangedHandler.push(colorChangedHandler);

    _inputElem.addEventListener("change", () => {
        style.ballColor = _inputElem.value;
    });

    return {}
})();


const blockVisibilityOption = (function () {
    const inputElem = document.getElementById("bb-block-visibility-input");
    const valueElem = document.getElementById("bb-block-visibility-value");
    style.blockVisibilityChangedHandler.push(changedHandler);
    changedHandler();

    inputElem.addEventListener("change", () => {
        style.isBlockVisible = inputElem.checked;
    });

    function changedHandler() {
        if (!loader.isInitialized) {
            requestAnimationFrame(changedHandler);
        }
        valueElem.textContent = style.isBlockVisible ? "ON" : "OFF";
        inputElem.checked = style.isBlockVisible;
    }
    return {}
})();


const maskTypeOption = (function () {
    const inputElem = document.getElementById("bb-bezier-mask-input");
    const valueElem = document.getElementById("bb-bezier-mask-value");
    inputElem.addEventListener("change", () => {
        style.isBezierMaskEnabled = inputElem.checked;
    });
    style.maskTypeChangedHandler.push(update);
    update();

    function update() {
        valueElem.textContent = style.isBezierMaskEnabled ? "ON" : "OFF";
        inputElem.checked = style.isBezierMaskEnabled;
    }
    return {}
})();


const itemExplanationTypeOption = (function () {
    const inputElem = document.getElementById("bb-item-explanation-input");
    const valueElem = document.getElementById("bb-item-explanation-value");
    inputElem.addEventListener("change", update);
    inputElem.checked = DropItem.needExplanation;
    update();

    function update() {
        const value = inputElem.checked;
        DropItem.needExplanation = value;
        valueElem.textContent = value ?
            "ON" : "OFF";
    }
    return {}
})();


/**volumeOptionの調整機能のUIとのやり取りを行う */
const volumeOption = (function () {
    const bgmInputElem = document.getElementById("bb-bgm-volume-input");
    const bgmValueElem = document.getElementById("bb-bgm-volume-input-value");
    bgmInputElem.addEventListener("change", () => {
        const value = bgmInputElem.value;
        bgmValueElem.textContent = `${value}倍`;
        sm.bgmScale = value;
    })
    const seInputElem = document.getElementById("bb-se-volume-input");
    const seValueElem = document.getElementById("bb-se-volume-input-value");
    seInputElem.addEventListener("change", () => {
        const value = seInputElem.value;
        seValueElem.textContent = `${value}倍`;
        sm.seScale = value;
    })
    return {}
})();


const fullscreen = (function () {
    const checkbox = document.getElementById("bb-fullscreen-checkbox");
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            _requestFullscreen();
        } else {
            _exitFullscreen();
        }
    });

    const requestFullscreens = [
        "requestFullscreen",
        "webkitRequestFullScreen",
        "mozRequestFullScreen",
        "msRequestFullscreen",
    ];
    const able = requestFullscreens.some(e =>
        document.documentElement[e] !== undefined
    )
    if (!able) {
        const elems = document.getElementsByClassName("bb-fullscreen");
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
        }
    }

    //Escなどで抜けた時用
    document.addEventListener("fullscreenchange", () => {
        checkbox.checked = Boolean(document?.fullscreenElement);
    });

    function _requestFullscreen() {
        for (let i = 0; i < requestFullscreens.length; i++) {
            if (document.documentElement[requestFullscreens[i]]) {
                document.documentElement[requestFullscreens[i]]();
                break;
            }
        }
    }
    function _exitFullscreen() {
        const exitFullscreens = [
            "exitFullscreen",
            "webkitExitFullscreen",
            "mozCancelFullScreen",
            "msExitFullscreen",
        ];
        for (let i = 0; i < exitFullscreens.length; i++) {
            if (document[exitFullscreens[i]]) {
                document[exitFullscreens[i]]();
                break;
            }
        }
    }
})();


// stages.currentをBallで勝手に見に行く。injectionの必要なし

class Ball {
    //static
    static #gElem = document.getElementById("bb-ball-container");
    static get #defSvgR() {
        return stages.current.defBallR;
    }
    static modeTypes = {
        normal: "normal",
        penetration: "penetration"
    }

    //public
    /**@type {Velocity} */
    #v;
    get v() { return this.#v; }
    prev;//BallManager uses these
    next;

    //private
    #svgr
    #xr;
    #yr;
    #mode = Ball.modeTypes.normal;
    #svgElem;
    constructor(x, y, vx, vy) {
        this.#svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.#svgElem.classList.add("bb-ball");
        this.setSvgR();
        this.x = x ?? 0.5;
        this.y = y ?? pad.top - this.yr;
        this.#v = new Velocity(vx, vy);
        Ball.#gElem.appendChild(this.#svgElem);
        this.moveSvg();
    }
    destruct() {
        this.#svgElem.remove();
        this.tailEffector.deconstruct();
    }
    moveSvg() {
        this.#svgElem.style.transform = `translate(${this.x * 100}%, ${this.y * 100}%)`;
    }
    get mode() { return this.#mode; }
    set mode(modeName) {
        if (this.#mode === modeName) return;
        this.#mode = modeName;
        if (this.#mode === Ball.modeTypes.penetration) {
            this.#svgElem.classList.add("bb-ball--penetration");
            this.tailEffector.activatePenetration();
        } else {
            this.#svgElem.classList.remove("bb-ball--penetration");
            this.tailEffector.deactivatePenetration();
        }
    }

    /**ボールの半径を設定する．引数がない場合デフォルト値にする．
     * @param {number} newR 設定する半径(svg形式, 実数)*/
    setSvgR(newR = Ball.#defSvgR) {
        this.#svgr = newR;
        //仕様: https://triple-underscore.github.io/svg-coords-ja.html#_normalized-diagonal
        //xの基準横幅が1，yの基準縦幅がaspectRatioだとする．
        //r(%)の基準長さlは
        const l = Math.sqrt(1 ** 2 + stages.current.aspectRatio ** 2) / Math.SQRT2;
        this.#xr = l * this.#svgr / 1;
        this.#yr = l * this.#svgr / stages.current.aspectRatio;
        this.#svgElem.setAttribute("r", `${this.#svgr * 100}%`);
    }
    get svgr() { return this.#svgr; }
    get xr() { return this.#xr; }
    get yr() { return this.#yr; }
    get left() { return this.x - this.xr; }
    get right() { return this.x + this.xr; }
    get top() { return this.y - this.yr; }
    get bottom() { return this.y + this.yr; }
    //貫通したときにエフェクトを発生させる．
    causePenetrationEffect() { return this.#mode !== Ball.modeTypes.normal; }
    get inViewbox() { return this.top < 1; }

    //ブロック衝突時にボールからエフェクトを発生させる。
    #hitEffector = (function (ball) {
        const _gElem = document.getElementById("bb-hit-effect-container");
        const _removeTiming = 1000;//[ms]
        const _minimumRadius = 0.03;//[svg radius]
        /**
         * ボールがブロックに衝突したときの円形エフェクトを発生させる。
         * @param {string} direction "lr"もしくは"tb"
         */
        function _invoke(direction) {
            let x = ball.x;
            let y = ball.y;
            let r = Math.max(_minimumRadius, ball.svgr);
            if (direction == "lr") {
                x += (ball.v.x < 0 ? 1 : -1) * ball.#svgr;
            } else if (direction == "tb") {
                y += (ball.v.y < 0 ? 1 : -1) * ball.#svgr;
            } else {
                throw "hit effect direction parameter error.";
            }
            //templateを使うほどではなさそう
            const elem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            elem.classList.add("bb-hit-effect");
            elem.setAttribute("cx", `${x * 100}%`);
            elem.setAttribute("cy", `${y * 100}%`);
            elem.setAttribute("r", `${r * 100}%`)
            _gElem.appendChild(elem);
            setTimeout(() => {
                _gElem.removeChild(elem);
            }, _removeTiming)
        }
        return {
            invoke: _invoke,
        };
    })(this);

    tailEffector = new TailEffector(this);

    invokeHitEffect = this.#hitEffector.invoke;
}


//クラス外から見る分にはscaleがかけられている値のみとなるようにする。

/**Ballの速度を表すクラス */
class Velocity {
    static scale = 1;
    /**Flashアイテム用の速度倍率 */
    static flashScale = 1;
    static get totalScale() { return this.scale * this.flashScale; }
    static #defAngle = 55;
    static get #defVx() {
        return stages.current.v0 * Math.cos(this.#defAngle / 180 * Math.PI);//[/msec]
    }
    static get #defVy() {
        return x2y(-stages.current.v0 * Math.sin(this.#defAngle / 180 * Math.PI));
    }
    static get #increment() { return stages.current.dv; }
    static get #max() { return stages.current.maxV; }
    static get #smash() { return stages.current.smashV; }
    // ボールの進行角度を(1/2+-AngleLim/2)*pi（下側も同様）に制限する
    static #angleLim = 0.8;


    x = Velocity.#defVx;
    y = Velocity.#defVy;
    constructor(x = Velocity.#defVx, y = Velocity.#defVy) {
        this.x = x;
        this.y = y;
    }


    // Ballには以前実装したmodeもあるが、penetrationかつsmashed(or not smashed)など
    // 状況が複雑になりうるうえ独立なので変数も独立させる。
    /**最後のパドル衝突の時がスマッシュならばtrue */
    smashed = false;

    get #smashXY() {
        const y_x = y2x(this.y);
        const nowLen = length(this.x, y_x);
        const ratio = Velocity.#smash / nowLen;
        return [this.x * ratio * Velocity.totalScale, x2y(y_x) * ratio * Velocity.totalScale];
    }

    /**いろいろを加味した実際の進行速度 */
    get ActualXY() {
        if (this.smashed) {
            return (this.#smashXY);
        } else {
            return [this.x * Velocity.totalScale, this.y * Velocity.totalScale];
        }
    }


    #atVLimit = false;
    accelerate() {
        if (this.#atVLimit) return;
        //vScaleなしでLimit計算
        const y_x = y2x(this.y);
        const len = length(this.x, y_x);
        let newLen = len + Velocity.#increment;
        if (newLen > Velocity.#max) {
            this.#atVLimit = true;
            newLen = Velocity.#max;
        }
        this.x = newLen / len * this.x;
        this.y = newLen / len * x2y(y_x);
    }
    /**
     * 進行方向を変更する。
     * @param {Number} angle 進行方向の角度[rad]
     */
    #rotate(angle) {
        // angle     |   0   90|  90  180| 180 270|270 360
        // angle     |-360 -270|-270 -180|-180 -90|-90   0
        // direction |   →↓    |    ↓←   |   ↑←   |   ↑→
        const dx_x = Math.cos(angle);
        const dy_x = Math.sin(angle);
        //y座標で長さ1ならばx座標では長さaspectRatio
        //x座標で長さ1ならばy座標では1/aspectRatio
        //ball.v.yをx座標での長さに単位変換
        const ballV = length(this.x, y2x(this.y));
        this.x = ballV * dx_x;
        this.y = ballV * x2y(dy_x);
    }
    /**
     * 進行方向を上側に変更する。
     * @param {Number} normaliedValue -1から1までの値。+だと+x方向に飛ぶ。
     */
    rotateToUpper(normaliedValue) {
        const angle = -0.5 + normaliedValue * Velocity.#angleLim / 2;
        this.#rotate(angle * Math.PI);
    }
    rotateToRandom() {
        const angle = (Math.random() - 0.5) * Velocity.#angleLim;
        const UorB = Math.random() < 0.5 ? -1 : 1;
        this.#rotate(angle * UorB * Math.PI);
    }
    // プラスマイナスsmallRandomAngleの中でランダム
    static #smallRandomAngle = 5 / 180 * Math.PI;
    /** ボールの向きを少しだけランダムな方向に変更する。 */
    rotateToSmallRandom() {
        // 進行方向が第1象限-第4象限のいずれかから飛び出ないように気を付ける。
        const y_x = y2x(this.y);
        const len = length(this.x, y_x);
        const ang = Math.atan2(y_x, this.x);
        // 90度で正規化された値
        const ang_n = ang / (Math.PI / 2);
        // 各象限（Pi/2）のうち、軸に近いところは制限する
        // Y方向は制限なくてもいいが実装の簡単さのために制限している。
        const ang_n_max = Math.ceil(ang_n) - (1 - Velocity.#angleLim) * (Math.PI / 2);
        const ang_n_min = Math.floor(ang_n) + (1 - Velocity.#angleLim) * (Math.PI / 2);
        const ang_n_rand = ang_n + (Math.random() - 0.5) * 2 * Velocity.#smallRandomAngle;
        const ang_new = Math.min(ang_n_max, Math.max(ang_n_min, ang_n_rand));

        this.x = len * Math.cos(ang_new * (Math.PI / 2));
        this.y = x2y(len * Math.sin(ang_new * (Math.PI / 2)));
    }
}


class TailEffector {
    static #containerElem = document.getElementById("bb-tail-effect-container");
    static #n = 10;
    static flashMode = false;
    #ball;
    #elem = TailEffector.#createElem();
    #pList = [];
    #elem_flash = TailEffector.#createElem();
    #pList_flash = [];

    /** @param {Ball} ball */
    constructor(ball) {
        this.#ball = ball;
        this.#elem.classList.add("bb-tail-effect");
        this.#elem_flash.classList.add("bb-tail-effect");
        TailEffector.#containerElem.appendChild(this.#elem);
        TailEffector.#containerElem.appendChild(this.#elem_flash);
    }
    /**現在のボールの位置で最新座標を更新する。 */
    update() {
        this.#pList.push(this.#ball.x * 1000);
        this.#pList.push(this.#ball.y * 1000 * stages.current.aspectRatio);
        while (this.#pList.length > TailEffector.#n * 2) {
            this.#pList.shift();
        }
        if (TailEffector.flashMode) {
            this.#pList_flash.push(this.#ball.x * 1000);
            this.#pList_flash.push(this.#ball.y * 1000 * stages.current.aspectRatio);
        } else {
            if (this.#pList_flash.length > 0) {
                this.#pList_flash = [];
            }
        }
        this.setPoints();
    }
    setPoints() {
        let str = "";
        for (let i = 0; i < this.#pList.length; i++) {
            str += String(this.#pList[i]);
            str += i % 2 === 0 ? "," : " ";
        }
        this.#elem.setAttribute("points", str);
        str = "";
        for (let i = 0; i < this.#pList_flash.length; i++) {
            str += String(this.#pList_flash[i]);
            str += i % 2 === 0 ? "," : " ";
        }
        this.#elem_flash.setAttribute("points", str);
    }
    activatePenetration() {
        this.#elem.classList.add("bb-tail-effect--penetration");
        this.#elem_flash.classList.add("bb-tail-effect--penetration");
    }
    deactivatePenetration() {
        this.#elem.classList.remove("bb-tail-effect--penetration");
        this.#elem_flash.classList.remove("bb-tail-effect--penetration");
    }
    deconstruct() {
        TailEffector.#containerElem.removeChild(this.#elem);
        TailEffector.#containerElem.removeChild(this.#elem_flash);
    }
    static #createElem() {
        return document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    }
}


/**BallManager */
const bm = (function () {
    /**@type {Ball|null} */
    let _head = null;
    /**@type {Ball|null} */
    let _nowNode = null;
    const _limitNum = 1000;
    let _numBall = 0;
    /**ノードを削除する
     * @param {Ball} target 削除対象のノード*/
    function _delete(target) {
        target.destruct();
        if (target.prev === null && target.next === null) {
            _head = null;
        } else if (target.prev === null) {
            _head = target.next;
            target.next.prev = null;
        } else if (target.next === null) {
            target.prev.next = target.next;
        } else {
            target.prev.next = target.next;
            target.next.prev = target.prev;
        }
        _numBall--;
    }
    //public
    return {
        get canAdd() { return _numBall < _limitNum; },
        //先頭にnewBallを追加する
        /**先頭にノードを追加する
         * @param {Ball} newBall 追加対象*/
        add(newBall) {
            _numBall++;
            newBall.next = _head;
            newBall.prev = null;
            _head = newBall;
            if (newBall.next !== null) newBall.next.prev = newBall;
        },
        gotoHead() { _nowNode = _head; },
        gotoNext() { if (_nowNode !== null) _nowNode = _nowNode.next; },
        get nowNode() { return _nowNode; },
        get head() { return _head; },
        moveSvgAll() {
            let target = _head;
            while (target !== null) {
                target.moveSvg();
                target = target.next;
            }
        },
        turnOffPenetrationAll() {
            let target = _head;
            while (target !== null) {
                target.mode = Ball.modeTypes.normal;
                target = target.next;
            }
        },
        deleteAll() {
            let target = _head;
            while (target !== null) {
                target.destruct();
                target = target.next;
            }
            _head = null;
            _numBall = 0;
        },
        sweep() {
            let target = _head;
            while (target !== null) {
                if (!target.inViewbox) {
                    _delete(target);
                }
                target = target.next;
            }
        },
        get noBall() { return _head === null; }
    }
})();


// padオブジェクトに必要な値はstages.currentを勝手に見に行く
// SVG描画に必要な値はLoaderが注入する。


const pad = (function () {
    //private
    let _width = _defWidth();
    function _defWidth() { return stages.current.padW; }
    function _setWidth(value) {
        if (value === _width) return;
        _width = value;
        _svgElem.setAttribute("width", `${_width * 100}%`);
        _moveSvgX();
    }
    /**前のフレームでのxの値．side衝突判定で使用 */
    let _beforeX = 0.5;

    const _svgElem = document.getElementById("bb-pad");
    _svgElem.addEventListener("animationend", () => {
        _svgElem.classList.remove("bb-pad--hit");
    }, { passive: true });

    {
        function _animationLoop() {
            requestAnimationFrame(_animationLoop);
            if (game?.isPausing) { return; }
            _moveSvgX();
        }
        requestAnimationFrame(_animationLoop);
    }

    stages.changedHandlerList.push(() => {
        _width = _defWidth();
    });

    /**現在のcursor.xの値でSVGを更新する */
    function _moveSvgX() {
        _svgElem.style.transform = `translate(${_getLeft() * 100}%)`;
    }
    _moveSvgX();
    function _getLeft() { return cursor.x - _width / 2; }

    return {
        get x() { return cursor.x; },
        /**現在のxの値を_beforeX(前回のフレームのx)として記録する */
        recordBeforeX() { _beforeX = cursor.x; },
        get width() { return _width; },
        set width(value) { _setWidth(value) },
        setWidthByDefault() { this.width = _defWidth(); },
        get left() { return _getLeft(); },
        get right() { return cursor.x + this.width / 2; },
        get beforeLeft() { return _beforeX - this.width / 2; },
        get beforeRight() { return _beforeX + this.width / 2; },
        get top() { return stages.current.padY; },
        get bottom() { return this.top + stages.current.padH; },
        /**ゲーム領域に対するパドル中心部の横幅 */
        get coreWidth() { return stages.current.padCoreW * this.width; },
        causeHitEffect() {
            _svgElem.setAttribute("class", "bb-pad--hit");
        },
    }
})();


// blocksからのみ呼ばれる。
// いずれblocksに併合した方がよいか

// rectとbezierの切り替えはsyle.jsで行う

const bezierClipManeger = (function () {
    /** @type {BezierClippath} */
    let _current;
    const _edgeClipElem = document.getElementById("bb-foreground-mask--bezier-edge");
    const _coreClipElem = document.getElementById("bb-foreground-mask--bezier-core");

    /**
     * マスクの初期化を行う
     */
    function _buildStage() {
        while (_edgeClipElem.firstChild) {
            _edgeClipElem.removeChild(_edgeClipElem.firstChild);
        }
        while (_coreClipElem.firstChild) {
            _coreClipElem.removeChild(_coreClipElem.firstChild);
        }
        _current = new BezierClippath(_edgeClipElem, _coreClipElem);
    }

    return {
        buildStage: _buildStage,
        update() {
            _current?.update();
        }
    }
})();


/**
 * マスク処理など、多数のブロックにより描画が重くなるのを防ぐための処理を行うクラス
 */
class BezierClippath {
    #nRow = 1;
    #nCol = 1;
    /**@type {SVGPathElement} */
    #bezierPathElem = document.createElementNS("http://www.w3.org/2000/svg", "path");
    #clusterPathElem = document.createElementNS("http://www.w3.org/2000/svg", "path");
    /**@type {BezierClippathNode[][]} */
    #nodes = [];

    /**
     * @param {SVGClipPathElement} edgeClipElem 
     * @param {SVGClipPathElement} coreClipElem 
     */
    constructor(edgeClipElem, coreClipElem) {
        this.#nRow = blocks.nRow;
        this.#nCol = blocks.nCol;
        this.#bezierPathElem.setAttribute("id", "bb-bezier-clip__bezier-path");
        this.#clusterPathElem.setAttribute("id", "bb-bezier-clip__cluster-path");
        // optimizeSpeedの方が速そう
        this.#bezierPathElem.style.shapeRendering = "optimizeSpeed";
        this.#clusterPathElem.style.shapeRendering = "optimizeSpeed";

        const absBlockW = 1000 / this.#nCol;
        for (let r = 0; r < this.#nRow; r++) {
            this.#nodes.push([]);
            for (let c = 0; c < this.#nCol; c++) {
                const node = new BezierClippathNode();
                node.path = this.#generatePath(absBlockW, r, c);
                this.#nodes[r].push(node);
            }
        }
        this.#updateNodeTypes();

        // DRAW
        const bezierD = this.#calcBezierPathDefinition();
        this.#bezierPathElem.setAttribute("d", bezierD);
        edgeClipElem.appendChild(this.#bezierPathElem);
        const clusterD = this.#calcClusterPathDefinition();
        this.#clusterPathElem.setAttribute("d", clusterD);
        coreClipElem.appendChild(this.#clusterPathElem);
    }

    #bezierDBuffer = "";
    #clusterDBuffer = "";
    update() {
        // performance.nowの測定結果@PC
        this.#updateNodeTypes();
        const bezierD = this.#calcBezierPathDefinition();
        const clusterD = this.#calcClusterPathDefinition();
        if (bezierD !== this.#bezierDBuffer) {
            this.#bezierPathElem.setAttribute("d", bezierD);
            this.#bezierDBuffer = bezierD;
        }
        if (clusterD !== this.#clusterDBuffer) {
            this.#clusterPathElem.setAttribute("d", clusterD);
            this.#clusterDBuffer = clusterD;
        }
    }


    #calcBezierPathDefinition() {
        let d = "";
        for (let r = 0; r < this.#nRow; r++) {
            for (let c = 0; c < this.#nCol; c++) {
                if (this.#nodes[r][c].type === "edge") {
                    d += this.#nodes[r][c].path;
                }
            }
        }
        return d;
    }

    #calcClusterPathDefinition() {
        // return ""
        // clusters //
        const horizontals = [];
        for (let r = 0; r < this.#nRow + 1; r++) {
            const rr = r - 1;
            let begin = undefined;
            for (let c = 0; c < this.#nCol; c++) {
                const isNeighborExist = rr > 0 && this.#nodes[rr][c].type === "core";
                const isExist = r < this.#nRow && this.#nodes[r][c].type === "core";
                const isEdge = isNeighborExist ^ isExist;//xor
                if (isEdge) {
                    if (begin === undefined) {
                        begin = c;
                    } else {
                        // nothing
                    }
                } else {
                    if (begin === undefined) {
                        // nothing
                    } else {
                        horizontals.push([[r, begin], [r, c]]);
                        begin = undefined;
                    }
                }
            }
            if (begin !== undefined) {
                horizontals.push([[r, begin], [r, this.#nCol]]);
            }
        }


        const verticals = [];
        for (let c = 0; c < this.#nCol + 1; c++) {
            const cc = c - 1;
            let begin = undefined;
            for (let r = 0; r < this.#nRow; r++) {
                const isNeighborExist = cc > 0 && this.#nodes[r][cc].type === "core";
                const isExist = c < this.#nCol && this.#nodes[r][c].type === "core";
                const isEdge = isNeighborExist ^ isExist;//xor
                if (isEdge) {
                    if (begin === undefined) {
                        begin = r;
                    } else {
                        // nothing
                    }
                } else {
                    if (begin === undefined) {
                        // nothing
                    } else {
                        verticals.push([[begin, c], [r, c]]);
                        begin = undefined;
                    }
                }
            }
            if (begin !== undefined) {
                verticals.push([[begin, c], [this.#nRow, c]]);
            }
        }

        // DRAW
        const w = 1000 / this.#nCol;
        const lines = [...horizontals, ...verticals];
        let current = [[-1, -1], [-1, -1]];
        let pivot = current[1];
        let d = `M -1,-1`;
        while (lines.length !== 0) {
            const i = lines.findIndex(l => l[0][0] === pivot[0] && l[0][1] === pivot[1]
                || l[1][0] === pivot[0] && l[1][1] === pivot[1]
            );
            if (i === -1) {
                d += `Z `;
                current = lines.pop();
                pivot = current[1];
                d += `M ${current[0][1] * w},${current[0][0] * w} `;
            } else {
                current = lines[i];
                lines.splice(i, 1);
                if (current[0][0] === pivot[0] && current[0][1] === pivot[1]) {
                    pivot = current[1];
                } else {
                    pivot = current[0];
                }
            }
            d += `L ${pivot[1] * w},${pivot[0] * w} `;
        }
        d += `L ${pivot[1] * w},${pivot[0] * w} Z`;
        return d;
    }


    /** BezierCurveの精度 */
    #p = 1;
    /**
     * @param {number} absW 
     * @param {number} r 
     * @param {number} c 
     * @returns {string}
     */
    #generatePath(absW, r, c) {
        const absBlockH = absW;
        const cx = c * absW + absW / 2;
        const cy = r * absBlockH + absBlockH / 2;

        // 理論的ではなく経験的な調整だが、この数値ならば
        // ブロックの隙間が見えない。
        const middmin = 0.8;
        const middmax = 1.4;
        const ndmin = 2.4;
        const ndmax = 3.0;
        const nmin = 7;
        const nmax = 9;

        const n = getRandomInt(nmin, nmax);
        const da = Math.PI * 2 / n;
        const angles = [...Array(n).keys()]
            .map(i => getRandom(da * i, da * (i + 1)));

        const begind = absW / 2 * getRandom(ndmin, ndmax);
        const beginx = cx + begind * Math.cos(angles[0]);
        const beginy = cy + begind * Math.sin(angles[0]);
        let d = `M ${beginx.toFixed(this.#p)},${beginy.toFixed(this.#p)}`;

        angles.push(angles[0] + Math.PI * 2);
        for (let i = 1; i < angles.length; i++) {
            let mida1 = getRandom(angles[i - 1], angles[i]);
            let mida2 = getRandom(angles[i - 1], angles[i]);
            if (mida1 > mida2) {
                [mida1, mida2] = [mida2, mida1];
            }
            const midd1 = absW / 2 * getRandom(middmin, middmax);
            const midd2 = absW / 2 * getRandom(middmin, middmax);
            const nd = i == angles.length - 1 ? begind :
                absW / 2 * getRandom(ndmin, ndmax);
            // toFixed(1):小数点以下1桁より下を捨てる。
            const midx1 = (cx + midd1 * Math.cos(mida1)).toFixed(this.#p);
            const midy1 = (cy + midd1 * Math.sin(mida1)).toFixed(this.#p);
            const midx2 = (cx + midd2 * Math.cos(mida2)).toFixed(this.#p);
            const midy2 = (cy + midd2 * Math.sin(mida2)).toFixed(this.#p);
            const ndx = (cx + nd * Math.cos(angles[i])).toFixed(this.#p);
            const ndy = (cy + nd * Math.sin(angles[i])).toFixed(this.#p);
            d += `C ${midx1},${midy1} ${midx2},${midy2} ${ndx},${ndy} `;
        }
        d = d + " Z ";

        return d;
    }

    #updateNodeTypes() {
        for (let r = 0; r < this.#nRow; r++) {
            for (let c = 0; c < this.#nCol; c++) {
                if (blocks.isExist(r, c)) {
                    this.#nodes[r][c].type = "edge";
                } else {
                    this.#nodes[r][c].type = "none";
                }
            }
        }
        for (let r = 0; r < this.#nRow; r++) {
            cLoop: for (let c = 0; c < this.#nCol; c++) {
                if (this.#nodes[r][c].type === "none") { continue; }
                for (let k = 0; k < this.#kernel8.length; k++) {
                    const rr = r + this.#kernel8[k][0];
                    const cc = c + this.#kernel8[k][1];
                    if (rr < 0 || this.#nRow <= rr) { continue cLoop; }
                    if (cc < 0 || this.#nCol <= cc) { continue cLoop; }
                    if (this.#nodes[rr][cc].type === "none") { continue cLoop; }
                }
                this.#nodes[r][c].type = "core";
            }
        }
    }
    #kernel8 = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        // [0,0],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
}


class BezierClippathNode {
    /**@type {"none"|"edge"|"core"} */
    type = "none";
    /**@type {string} */
    path;
    /**@param {string} path */
    constructor(path) {
        this.path = path;
    }
}


const rectClipManeger = (function () {
    /** @type {RectClippath} */
    let _current;
    const _clipElem = document.getElementById("bb-foreground-mask--rect");

    /**
     * マスクの初期化を行う
     */
    function _buildStage() {
        while (_clipElem.firstChild) {
            _clipElem.removeChild(_clipElem.firstChild);
        }
        _current = new RectClippath(_clipElem);
    }

    return {
        buildStage: _buildStage,
        update() {
            _current?.update();
        }
    }
})();


/**
 * マスク処理など、多数のブロックにより描画が重くなるのを防ぐための処理を行うクラス
 */
class RectClippath {
    // NOTE: 単純に矩形を敷き詰めるプログラムだと、iPhoneにてFPS低下が生じた。
    // 仕方ないので、大変だがこちら側で一筆書きのPATHを求めている。
    #nRow = 1;
    #nCol = 1;
    /**@type {SVGPathElement} */
    #pathElem = document.createElementNS("http://www.w3.org/2000/svg", "path");

    /**
     * @param {SVGClipPathElement} clipElem 
     */
    constructor(clipElem) {
        this.#nRow = blocks.nRow;
        this.#nCol = blocks.nCol;
        const d = this.#calcPathDefinition();

        this.#pathElem.setAttribute("d", d);
        clipElem.appendChild(this.#pathElem);
    }


    #dBuffer = "";
    update() {
        const d = this.#calcPathDefinition();
        // 毎回updateは結構重たい
        if (d === this.#dBuffer) { return; }
        this.#pathElem.setAttribute("d", d);
        this.#dBuffer = d;
    }

    #calcPathDefinition() {
        const horizontals = [];
        for (let r = 0; r < this.#nRow + 1; r++) {
            const rr = r - 1;
            let begin = undefined;
            for (let c = 0; c < this.#nCol; c++) {
                const isNeighborExist = rr > 0 && blocks.isExist(rr, c);
                const isExist = r < this.#nRow && blocks.isExist(r, c);
                const isEdge = isNeighborExist ^ isExist;//xor
                if (isEdge) {
                    if (begin === undefined) {
                        begin = c;
                    } else {
                        // nothing
                    }
                } else {
                    if (begin === undefined) {
                        // nothing
                    } else {
                        horizontals.push([[r, begin], [r, c]]);
                        begin = undefined;
                    }
                }
            }
            if (begin !== undefined) {
                horizontals.push([[r, begin], [r, this.#nCol]]);
            }
        }


        const verticals = [];
        for (let c = 0; c < this.#nCol + 1; c++) {
            const cc = c - 1;
            let begin = undefined;
            for (let r = 0; r < this.#nRow; r++) {
                const isNeighborExist = cc > 0 && blocks.isExist(r, cc);
                const isExist = c < this.#nCol && blocks.isExist(r, c);
                const isEdge = isNeighborExist ^ isExist;//xor
                if (isEdge) {
                    if (begin === undefined) {
                        begin = r;
                    } else {
                        // nothing
                    }
                } else {
                    if (begin === undefined) {
                        // nothing
                    } else {
                        verticals.push([[begin, c], [r, c]]);
                        begin = undefined;
                    }
                }
            }
            if (begin !== undefined) {
                verticals.push([[begin, c], [this.#nRow, c]]);
            }
        }

        // DRAW
        const w = 1000 / this.#nCol;
        const lines = [...horizontals, ...verticals];
        let current = [[-1, -1], [-1, -1]];
        let pivot = current[1];
        let d = `M -1,-1`;
        while (lines.length !== 0) {
            const i = lines.findIndex(l => l[0][0] === pivot[0] && l[0][1] === pivot[1]
                || l[1][0] === pivot[0] && l[1][1] === pivot[1]
            );
            if (i === -1) {
                d += `Z `;
                current = lines.pop();
                pivot = current[1];
                d += `M ${current[0][1] * w},${current[0][0] * w} `;
            } else {
                current = lines[i];
                lines.splice(i, 1);
                if (current[0][0] === pivot[0] && current[0][1] === pivot[1]) {
                    pivot = current[1];
                } else {
                    pivot = current[0];
                }
            }
            d += `L ${pivot[1] * w},${pivot[0] * w} `;
        }
        d += `L ${pivot[1] * w},${pivot[0] * w} Z`;
        return d;
    }
}



// jsonのラッパー
// C#とJSの差異はここで吸収する
class Block {
    type = "";
    durability = 0;
    groups = [];

    constructor(type, durability, groups) {
        this.type = type;
        this.durability = durability;
        this.groups = groups;
        if (this.type === "Immortal") {
            this.durability = Infinity;
        }
    }

}

/** 現在のブロックの状況を表す */
const blocks = (function () {
    /** @type {Block[][]} */
    let _blocks;

    //nRow, nColもこちらで公開すべきだと思うが、bBoundなどのaspectRatioにも依存する
    //パラメータがあり、面倒で移していない。
    /** @type {Number} */
    let _nRow;
    /** @type {Number} */
    let _nCol;
    /** @type {Number} */
    let _aspectRatio;
    /** @type {Number} */
    let _bBound;
    /** @type {Number} */
    let _beginCount;
    /** @type {Number} */
    let _breakCount = 0;



    /**
     * @param {StageData} s 
     */
    function _buildStage(s) {
        //配列のクローン
        const temp = JSON.parse(JSON.stringify(s.blockList));
        _nRow = s.nRow;
        _nCol = s.nCol;
        _aspectRatio = s.aspectRatio;
        _bBound = 1.0 / _nCol * _nRow / _aspectRatio;
        _blocks = [];
        for (let r = 0; r < _nRow; r++) {
            _blocks.push([]);
            for (let c = 0; c < _nCol; c++) {
                const i = _nCol * r + c;
                const json = temp[i];
                const b = new Block(json.Type, json.Durability, json.GroupKeyList);

                _blocks[r].push(b);
            }
        }
        _beginCount = _count();
        _breakCount = 0;
        _lastBreakPercent = 0;
        bezierClipManeger.buildStage();
        rectClipManeger.buildStage();
    }

    /**現在の破壊可能なブロック数 */
    function _count() {
        let sum = 0;
        for (let r = 0; r < _nRow; r++) {
            for (let c = 0; c < _nCol; c++) {
                if (_blocks[r][c].type === "Immortal") { continue; }
                if (_blocks[r][c].type === "None") { continue; }
                sum += Number(_isExist(r, c));
            }
        }
        return sum;
    }

    function _isExist(row, col) {
        return _blocks[row][col].durability > 0;
    }

    /**
     * 
     * @param {*} row 
     * @param {*} col 
     * @param {number} [count=1] 
     * @returns ブロックが壊されたらTrue
     */
    function _hit(row, col, count = 1) {
        if (!_isExist(row, col)) {
            throw "Block is not exist";
        }
        // Piercingの時はここを999くらいにすればよい
        _blocks[row][col].durability -= count;
        if (_isExist(row, col)) {
            return false;
        } else {
            _breakCount++;
            //整数として変化があるときのみ実行
            const p = _breakPercent();
            if (_lastBreakPercent !== p) {
                _onBreakPercentChanged();
                _lastBreakPercent = p;
            }
            for (const group of _blocks[row][col].groups) {
                blockGroups.decrement(group);
            }
            return true;
        }
    }


    /**現在のブロックの状態に合わせて描画処理を呼び出す。 */
    function _drawnow() {
        bezierClipManeger.update();
        rectClipManeger.update();
    }


    function _breakPercent() {
        return Math.floor(_breakCount * 100 / _beginCount);
    }

    let _onBreakPercentChanged;
    let _lastBreakPercent = 0;


    const blockGroups = (function () {
        // 初回処理は勝手に行う。retry時は明示的にresetを呼ぶ。

        // ブロックヒットごとに全てのブロックを走査するのはさすがに気が引けるので、
        // ゲーム開始時に事前処理をしておくためのプログラム
        let _count = {};

        _reset();
        function _reset() {
            _count = {};
            for (const s of stages.list) {
                for (const block of s.blockList) {
                    if (block.Type === "None") { continue; }
                    for (const key of block.GroupKeyList) {
                        if (_count[key] === undefined) {
                            _count[key] = 1;
                        } else {
                            _count[key]++;
                        }
                    }
                }
            }
        }

        /**特定グループのブロックを破壊した時に呼ぶ
         * @param {string} key 
         */
        function _decrement(key) {
            _count[key]--;
            if (_count[key] === 0) {
                em.onBreakAllOfBlockGroup.invoke(key);
            }
        }

        return {
            reset: _reset,
            decrement: _decrement,
        }
    })();

    return {
        buildStage: _buildStage,
        hit: _hit,
        drawnow: _drawnow,
        isExist: _isExist,
        get breakPercent() { return _breakPercent(); },
        set onBreakPercentChanged(value) { _onBreakPercentChanged = value; },
        get nRow() { return _nRow; },
        get nCol() { return _nCol; },
        get bBound() { return _bBound; },

        getBlock(row, col) { return _blocks[row][col]; },

        reset: blockGroups.reset,
    }
})()


/**
 * イベントのハンドラを保持する。
 * gameオブジェクトが適切なタイミングでInvokeする。
 */
class EventObserver {
    /** @type {EventHandler[]}*/
    #handlerList = [];

    /** @param {EventHandler} handler */
    add(handler) {
        this.#handlerList.push(handler);
    }
    //Allowを使わないとthisがおかしくなってしまう。
    //BlockGroup対応するとき雑に引数keyを付加した。これで動くがより丁寧なのが好ましい
    // 追記paddleではisCoreを渡す。
    invoke = async (key) => {
        const invokeList = this.#handlerList
            .filter(h => h.canInvoke(key));
        const removeList = invokeList.filter(h => !h.isRepeatable);
        this.#handlerList = this.#handlerList.filter(h =>
            !removeList.includes(h)
        );
        for (const h of invokeList) {
            const promise = h.invoke();
            if (promise.then) {
                // promise以外が返ってくることもある
                game.PromiseManager.regster(promise);
            }
            // ここではawaitしない。
            // 画像変更にしろサウンドにしろ、呼出しは一気に行いたい。
            // ステージ遷移などで待つ必要があるときはPromiseManager.waitする。
            // await promise;
        }
    }
}


/**
 * イベントのひとかたまり
 */
class EventHandler {
    #isRepeatable = false;
    #conditionList;
    #action;
    get isRepeatable() { return this.#isRepeatable; }
    /** 
     * @param {boolean} isRepeatable 
     * @param {EventConditionHandler[]} conditions 
     * @param {EventActionHandler} action */
    constructor(isRepeatable, conditions, action) {
        this.#isRepeatable = isRepeatable;
        this.#conditionList = conditions;
        this.#action = action;
    }

    /**
     * 登録されたConditionListに基づいて、現在実行可能ならばTrue
     * @returns 
     */
    canInvoke() {
        return this.#conditionList.every(c => c.isEnabled());
    }

    /**
     * 登録された内容を実行する。
     */
    async invoke() {
        // 昔は実行可能かここで判定していたが、canInvoke実装に伴い単に実行するのみになった。
        // ここでも判定するとcanInvoke呼出し時と状態が異なる可能性があるので。
        await this.#action.invoke();
    }
}


class BlockGroupEventHandler extends EventHandler {
    #key = "";
    /**
     * @param {boolean} isRepeatable 
     * @param {EventConditionHandler} conditions 
     * @param {EventActionHandler} action 
     * @param {string} key 
     */
    constructor(isRepeatable, conditions, action, key) {
        super(isRepeatable, conditions, action)
        this.#key = key;
    }

    canInvoke(key) {
        if (key !== this.#key) { return false; }
        return super.canInvoke();
    }
}


class PaddleEventHandler extends EventHandler {
    #shouldExcludeCore = "";
    /**
     * @param {boolean} isRepeatable 
     * @param {EventConditionHandler} conditions 
     * @param {EventActionHandler} action 
     * @param {bool} shouldExcludeCore
     */
    constructor(isRepeatable, conditions, action, shouldExcludeCore) {
        super(isRepeatable, conditions, action)
        this.#shouldExcludeCore = shouldExcludeCore;
    }

    canInvoke(isCore) {
        if (this.#shouldExcludeCore && isCore) {
            return false;
        }
        return super.canInvoke();
    }
}


///////////////
// Condition //
///////////////


class EventConditionHandler {
    /** ConditionがOK（実行可能）ならばTrue
     * @returns 
     */
    isEnabled() {
        // jsonのisEnableはそもそも各Conditionが有効化されているかどうかを表す。
        // こちらはConditionの良し悪しを判定している。命名がいまいちなので注意。
        return false;
    }
}


class InStageCondition extends EventConditionHandler {
    /**@type{Number[]} */
    #stageNumberList = [];
    /** @param {Number[]} stageNumberList */
    constructor(stageNumberList) {
        super();
        this.#stageNumberList = stageNumberList;
    }
    isEnabled() {
        return this.#stageNumberList.includes(stages.currentIndex);
    }
}

class BreakPercentCondition extends EventConditionHandler {
    #smallPercent = 0;
    #largePercent = 100;
    /**
     * @param {Number} smallPercent 
     * @param {Number} largePercent */
    constructor(smallPercent, largePercent) {
        super();
        this.#smallPercent = smallPercent;
        this.#largePercent = largePercent;
    }
    isEnabled() {
        const per = blocks.breakPercent;
        return this.#smallPercent <= per && per <= this.#largePercent;
    }
}

class StockCondition extends EventConditionHandler {
    #stockSmall = 0;
    #stockLarge = 100;
    /**
     * @param {Number} stockSmall 
     * @param {Number} stockLarge */
    constructor(stockSmall, stockLarge) {
        super();
        this.#stockSmall = stockSmall;
        this.#stockLarge = stockLarge;
    }
    isEnabled() {
        const stock = game.stock;
        return this.#stockSmall <= stock && stock <= this.#stockLarge;
    }
}

class RetryCondition extends EventConditionHandler {
    constructor() {
        super();
    }
    isEnabled() {
        return game.isRetry;
    }
}


class MemoryCondition extends EventConditionHandler {
    #conditions

    /**
     * @param {MemoryConditionElement[]} conditions
     */
    constructor(conditions) {
        super();
        this.#conditions = conditions;
    }
    isEnabled() {
        if (this.#conditions.length <= 0) { return true; }
        // evalを使うのはセキュリティ上怖い。
        // 幸いandとorしか使わない仕様なので中置記法のまま自力でParseする。
        let s = "";
        for (const e of this.#conditions) {
            s += e.operator;
            s += e.resolve();
        }
        // ↑まずは評価してand,or,true,falseのみからなる文字列に変換する。
        // ↓自力でParseして単一の値にする。
        const ors = s.split("or");
        let orResult = false;
        for (const or of ors) {
            const ands = or.split("and");
            const andTFs = ands.map(a => a === "true");
            let andResult = true;
            for (const and of andTFs) {
                andResult &&= and;
            }
            orResult ||= andResult;
        }
        return orResult;
    }
}

class MemoryConditionElement {
    #key = "";
    #value = ""
    /**@type{""|"and"|"or"} */
    #operator = ""
    get operator() { return this.#operator; }

    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * @param {""|"and"|"or"} operator 
     */
    constructor(key, value, operator) {
        this.#key = key;
        this.#value = value;
        this.#operator = operator;
    }

    resolve() {
        return em.memory.check(this.#key, this.#value);
    }
}

////////////
// Action //
////////////

class EventActionHandler {
    async invoke() { }
}

class SeqEventActionHandler extends EventActionHandler {
    _nextAction;
    /** @param {EventActionHandler} nextAction */
    constructor(nextAction) {
        super();
        this._nextAction = nextAction;
    }
    async invoke() {
        await this._nextAction.invoke();
    }
}

class GenerateItemAction extends SeqEventActionHandler {
    #item = OneupItem;
    /**
     *  @param {DropItem} item 
     * @param {EventActionHandler} nextAction */
    constructor(item, nextAction) {
        super(nextAction);
        this.#item = item;
    }
    async invoke() {
        const newItem = new this.#item(0.5, 0);
        dim.addItem(newItem);
        await super.invoke();
    }
}

class ItemPopPercentUpDownAction extends SeqEventActionHandler {
    // マイナス、100超にはならない。
    #value = 0;
    /** 
     * @param {Number} value 
     * @param {EventActionHandler} nextAction */
    constructor(value, nextAction) {
        super(nextAction);
        this.#value = value;
    }
    async invoke() {
        dig.popPercent += this.#value;
        await super.invoke();
    }
}

class ExecuteItemAction extends SeqEventActionHandler {
    #item = OneupItem;
    /**
     *  @param {DropItem} item 
     * @param {EventActionHandler} nextAction */
    constructor(item, nextAction) {
        super(nextAction);
        this.#item = item;
    }
    async invoke() {
        const newItem = new this.#item(2, 2);
        newItem.activate();
        newItem.destruct();
        await super.invoke();
    }
}

class HideBallAction extends SeqEventActionHandler {
    async invoke() {
        ballHideEffector.hideForEvent();
        await super.invoke();
    }
}

class RevealBallAction extends SeqEventActionHandler {
    async invoke() {
        ballHideEffector.revealForEvent();
        await super.invoke();
    }
}

class ChangeFrontImageAction extends SeqEventActionHandler {
    #key = "";
    /** 
     * @param {string} key 
     * @param {EventActionHandler} nextAction */
    constructor(key, nextAction) {
        super(nextAction);
        this.#key = key;
    }
    // 暗黙のto
    // https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats
    #fadeoutKeyframe = {
        opacity: 0,
    };
    #fadeoutTiming = {
        duration: 1000,
    };
    async invoke() {
        const promiseList = [];
        const groupList = document.getElementsByClassName("bb-foreground-group");
        const gfPairList = [];
        const url = ep.imageResourceList.find(e => e.name === this.#key).url;
        nextPageNavigator.registerExtraForeHref(url);
        for (const group of groupList) {
            const mainImage = group.getElementsByClassName("bb-foreground")[0];
            const fadeImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            fadeImage.classList.add("fade-image");
            group.appendChild(fadeImage);
            const promise = new Promise((res, rej) => {
                fadeImage.onload = res;
                fadeImage.setAttribute("href", mainImage.getAttribute("href"));
            }).then((res, rej) => {
                mainImage.onload = res;
                mainImage.setAttribute("href", url);
            });
            promiseList.push(promise)
            gfPairList.push({ group: group, fade: fadeImage });
        }

        await super.invoke();
        await Promise.all(promiseList);
        for (const gf of gfPairList) {
            const animation = gf.fade.animate(this.#fadeoutKeyframe, this.#fadeoutTiming);
            animation.onfinish = () => {
                gf.group.removeChild(gf.fade);
            }
        }
    }
}

class ChangeBackImageAction extends SeqEventActionHandler {
    #key = "";
    /** 
     * @param {string} key 
     * @param {EventActionHandler} nextAction */
    constructor(key, nextAction) {
        super(nextAction);
        this.#key = key;
    }
    #fadeoutKeyframe = {
        opacity: 0,
    };
    #fadeoutTiming = {
        duration: 1000,
    };
    async invoke() {
        const mainImage = document.getElementById("bb-background");
        const fadeImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        const group = document.getElementById("bb-background-group");
        group.appendChild(fadeImage);
        const promise = new Promise((res, rej) => {
            fadeImage.onload = res;
            fadeImage.setAttribute("href", mainImage.getAttribute("href"));
        }).then((res, rej) => {
            const url = ep.imageResourceList.find(e => e.name === this.#key).url;
            mainImage.onload = res;
            mainImage.setAttribute("href", url);
            nextPageNavigator.registerExtraBackHref(url);
        })
        await super.invoke();
        await promise;
        // よそでもHref変えようとすると干渉しかねない。
        // さっさと状態の変更を済ませてアニメーションなどは後でゆっくりやる。
        // いろんなところでAsync/Awaitしながら呼び出されるので何より矛盾なく処理したい。
        const fadeAnimation = fadeImage.animate(this.#fadeoutKeyframe, this.#fadeoutTiming);
        fadeAnimation.onfinish = () => {
            group.removeChild(fadeImage);
        };
    }
}

class PlaySoundAction extends SeqEventActionHandler {
    #key = "";
    constructor(key, nextAction) {
        super(nextAction);
        this.#key = key;
    }
    async invoke() {
        sm.callSeAsync(this.#key);
        await super.invoke();
    }
}

class ChangeSoundAction extends SeqEventActionHandler {
    #key = "";
    #type = "";
    constructor(key, name, nextAction) {
        super(nextAction);
        this.#key = key;
        this.#type = name;
    }
    async invoke() {
        sm.changeSoundAsync(this.#key, this.#type);
        await super.invoke();
    }
}

class StockUpDownAction extends SeqEventActionHandler {
    //ストック数は0よりは減らない。
    // このActionによりストック数は0になるが、今使っているボールがある限りは
    // ゲームオーバーにならない。
    #value = 0;
    /** 
     * @param {Number} value 
     * @param {EventActionHandler} nextAction */
    constructor(value, nextAction) {
        super(nextAction);
        this.#value = value;
    }
    async invoke() {
        game.stock = Math.max(game.stock + this.#value, 0);
        await super.invoke();
    }
}

class ForceGameOverAction extends EventActionHandler {
    async invoke() {
        game.State.isForceGameOverFlagged = true;
    }
}

class WaitAction extends SeqEventActionHandler {
    #duration = 1;//sec
    /** 
     * @param {Number} duration
     * @param {EventActionHandler} nextAction */
    constructor(duration, nextAction) {
        super(nextAction);
        this.#duration = duration;
    }
    async invoke() {
        game.timer.addEventHandler(
            new game.timer.Handler(
                this.#duration,
                async () => {
                    await super.invoke();
                }
            )
        );
    }
}

class DisplayTimerAction extends SeqEventActionHandler {
    #duration = 1;//sec
    #fontSize = 30;
    #x = 0;
    #y = 0;
    #selfRemovable = false;
    #isCountUp = false;
    /**
     * 
     * @param {String} text 
     * @param {Number} duration 
     * @param {Number} fontSize 
     * @param {Number} x 
     * @param {Number} y 
     * @param {EventActionHandler} nextAction 
     */
    constructor(duration, fontSize, x, y, selfRemovable, isCountUp, nextAction) {
        super(nextAction);
        this.#duration = duration;
        this.#fontSize = fontSize;
        this.#x = x;
        this.#y = y;
        this.#selfRemovable = selfRemovable;
        this.#isCountUp = isCountUp;
    }
    static #container = document.getElementById("bb-event-text-container");
    async invoke() {
        const elem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        elem.textContent = this.sec2str(
            this.#isCountUp ? 0 : this.#duration);
        elem.setAttribute("x", `${this.#x * 100}%`);
        elem.setAttribute("y", `${this.#y * 100}%`);
        elem.setAttribute("text-anchor", "middle");
        elem.style.fontSize = this.#fontSize;
        DisplayTimerAction.#container.appendChild(elem);
        DisplayTimerAction.#elementList.push(elem);
        let noMore = false;
        game.timer.addEventHandler(new game.timer.Handler(0,
            (waitingTime) => {
                if (noMore) { return; }
                elem.textContent = this.sec2str(this.#isCountUp ?
                    waitingTime : this.#duration - waitingTime
                );
                if (waitingTime < this.#duration) { return; }
                noMore = true;
                if (!this.#selfRemovable) { return; }
                setTimeout(() => {
                    elem.classList.add("bb-event-timer-text--fadeout");
                    //removeChildはステージの最後にまとめて行う。
                    // ないものを消そうとするとエラーが出てしまう。
                }, 3000);
            }, true));

        await super.invoke();
    }
    sec2str(sec) {
        const m = String(Math.floor(sec / 60));
        const mm = m.padStart(2, "0");
        const s = String(sec % 60);
        const ss = s.padStart(2, "0");
        return `${mm}:${ss}`;
    }
    static #elementList = [];
    static deleteAll() {
        DisplayTimerAction.#elementList.forEach(e => {
            DisplayTimerAction.#container.removeChild(e);
        })
        DisplayTimerAction.#elementList = [];
    }
}

class FadeTextAction extends SeqEventActionHandler {
    #text = "";
    #duration = 1;//sec
    #fontSize = 30;
    #x = 0;
    #y = 0;
    /**
     * 
     * @param {String} text 
     * @param {Number} duration 
     * @param {Number} fontSize 
     * @param {Number} x 
     * @param {Number} y 
     * @param {EventActionHandler} nextAction 
     */
    constructor(text, duration, fontSize, x, y, nextAction) {
        super(nextAction);
        this.#text = text;
        this.#duration = duration;
        this.#fontSize = fontSize;
        this.#x = x;
        this.#y = y;
    }
    #container = document.getElementById("bb-event-text-container");
    async invoke() {
        const elem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        elem.textContent = this.#text;
        elem.classList.add("bb-fade-event-text");
        elem.setAttribute("x", `${this.#x * 100}%`);
        elem.setAttribute("y", `${this.#y * 100}%`);
        elem.setAttribute("text-anchor", "middle");
        elem.style.fontSize = this.#fontSize;
        this.#container.appendChild(elem);
        setTimeout(() => {
            elem.addEventListener("animationend", () => {
                this.#container.removeChild(elem);
            })
            elem.classList.replace("bb-fade-event-text", "bb-fade-event-text--out");
        }, this.#duration * 1000);
        await super.invoke();
    }
}

class ShowMessageAction extends SeqEventActionHandler {
    #message = "";
    /** 
     * @param {string} message 
     * @param {EventActionHandler} nextAction */
    constructor(message, nextAction) {
        super(nextAction);
        this.#message = message;
    }
    async invoke() {
        const isPausing = game.Loop.isPausing;
        game.Loop.pause();
        alert(this.#message);
        sm.resumeAudioContext();
        //OnStageFinishは停止中に呼ばれる。みだりにresumeしてはいけない。
        if (!isPausing) {
            game.Loop.resume();
        }
        await super.invoke();
    }
}

class ConfirmMessageAction extends SeqEventActionHandler {
    #message = "";
    #cancelAction
    /**
     * 
     * @param {string} message 
     * @param {EventActionHandler} nextAction 
     * @param {EventActionHandler} cancelAction 
     */
    constructor(message, nextAction, cancelAction) {
        super(nextAction);
        this.#message = message;
        this.#cancelAction = cancelAction;
    }
    async invoke() {
        const isPausing = game.Loop.isPausing;
        game.Loop.pause();
        const result = confirm(this.#message);
        sm.resumeAudioContext();
        if (!isPausing) {
            game.Loop.resume();
        }
        if (result) {
            await super.invoke();
        } else {
            await this.#cancelAction.invoke();
        }
    }
}

class NoneAction extends EventActionHandler {
    async invoke() {
        //Nothing
    }
}

class ReloadAction extends EventActionHandler {
    async invoke() {
        location.reload();
    }
}

class RedirectAction extends EventActionHandler {
    #url = "";
    /** @param {string} url */
    constructor(url) {
        super();
        this.#url = url;
    }
    async invoke() {
        location.href = this.#url;
    }
}

class WriteMemoryAction extends SeqEventActionHandler {
    /**@type{"overwrite"|"append"} */
    #mode = "";
    #key = "";
    #value = "";

    /**
     * @param {"overwrite"|"append"} mode 
     * @param {string} key 
     * @param {string} value 
     * @param {EventActionHandler} nextAction 
     */
    constructor(mode, key, value, nextAction) {
        super(nextAction);
        this.#mode = mode;
        this.#key = key
        this.#value = value;
    }
    async invoke() {
        if (this.#mode === "overwrite") {
            em.memory.overwrite(this.#key, this.#value);
        } else {
            em.memory.append(this.#key, this.#value);
        }
        await super.invoke();
    }
}


/**メモリ管理用オブジェクト */
class MemoryFlag {
    #entity = new Map();

    /**
     * @param {string} key 
     * @param {string} value 
     */
    overwrite(key, value) {
        this.#entity.set(key, value);
        em.onMemoryChanged.invoke();
    }
    /**
     * @param {string} key 
     * @param {string} value 
     */
    append(key, value) {
        if (this.#entity.get(key) === undefined) {
            this.#entity.set(key, "");
        }
        this.#entity.set(key, this.#entity.get(key) + value);
        em.onMemoryChanged.invoke();
    }
    /**
     * @param {string} key 
     * @param {string} value 
     * @returns {bool}
     */
    check(key, value) {
        return this.#entity.get(key) === value;
    }
}


/**EventManager
 * EventObserverを一括保持する */
const em = (function () {

    let observerList = Array(12).fill().map(o =>
        new EventObserver()
    );//fillしないとundefinedだからかmapできない。

    let memory = new MemoryFlag();

    function _reset() {
        observerList = observerList.map(o => new EventObserver());
        eventParser.parse();
        memory = new MemoryFlag();
    }
    return {
        get beforeStageStart() { return observerList[0] },
        get afterStageStart() { return observerList[1] },
        get onStageFinish() { return observerList[2] },
        get onGameClear() { return observerList[3] },
        get onGameOver() { return observerList[4] },
        get onFail() { return observerList[5] },
        get onHitPaddle() { return observerList[6] },
        get onHitPaddleCore() { return observerList[7] },
        get onBreakPercent() { return observerList[8] },
        get onHitBlockBroup() { return observerList[9] },
        get onBreakAllOfBlockGroup() { return observerList[10] },
        get onMemoryChanged() { return observerList[11] },
        reset: _reset,
        memory: memory,
    }
})();


const eventParser = (function () {
    const list = ep.eventList;
    _parse();

    function _parse() {
        list.forEach(e => {
            //
            // Condition
            //
            const conditions = e.ConditionList
                .filter(c => c.IsEnabled)
                .map(c => {
                    if (c.$type === "InStageCondition") {
                        const stageList = [];
                        for (let i = 0; i < c.CheckList.length; i++) {
                            if (c.CheckList[i].IsEnabled) {
                                stageList.push(i);
                            }
                        }
                        return new InStageCondition(stageList);
                    } else if (c.$type === "BreakPercentCondition") {
                        return new BreakPercentCondition(
                            c.BreakPercentSmall, c.BreakPercentLarge
                        );
                    } else if (c.$type === "StockCondition") {
                        return new StockCondition(
                            c.StockSmall, c.StockLarge
                        );
                    } else if (c.$type === "RetryCondition") {
                        return new RetryCondition();
                    } else if (c.$type === "MemoryCondition") {
                        const conditions = c.Conditions.map(cond =>
                            new MemoryConditionElement(
                                cond.Key, cond.Value, cond.Operator
                            )
                        );
                        return new MemoryCondition(conditions);
                    } else {
                        console.error(c);
                        throw "Error in parse condition";
                    }
                });

            //
            //Action
            //
            const action = getActionRecursive(e.Action);

            //
            //Trigger
            //
            const isRepeatable = e.Trigger.IsRepeatable;

            const h = new EventHandler(
                isRepeatable,
                conditions,
                action);

            const triggerType = e.Trigger.$type;
            if (triggerType === "BeforeStageStart") {
                em.beforeStageStart.add(h);
            } else if (triggerType === "AfterStageStart") {
                em.afterStageStart.add(h);
            } else if (triggerType === "OnStageFinish") {
                em.onStageFinish.add(h);
            } else if (triggerType === "OnGameClear") {
                em.onGameClear.add(h);
            } else if (triggerType === "OnGameOver") {
                em.onGameOver.add(h);
            } else if (triggerType === "OnFail") {
                em.onFail.add(h);
            } else if (triggerType === "OnHitPaddle") {
                em.onHitPaddle.add(new PaddleEventHandler(
                    isRepeatable, conditions, action,
                    e.Trigger.ShouldExcludeCore
                ));
            } else if (triggerType === "OnHitPaddleCore") {
                em.onHitPaddleCore.add(h);
            } else if (triggerType === "OnBreakPercent") {
                em.onBreakPercent.add(h);
            } else if (triggerType === "OnHitBlockGroup") {
                em.onHitBlockBroup.add(new BlockGroupEventHandler(
                    isRepeatable, conditions, action,
                    e.Trigger.BlockGroupKey
                ));
            } else if (triggerType === "OnBreakAllOfBlockGroup") {
                em.onBreakAllOfBlockGroup.add(new BlockGroupEventHandler(
                    isRepeatable, conditions, action,
                    e.Trigger.BlockGroupKey
                ));
            } else if (triggerType === "OnMemoryChanged") {
                em.onMemoryChanged.add(h);
            } else {
                console.error(e);
                throw "Error in parse Trigger";
            }
        });
    }

    function getActionRecursive(a) {
        const type = a.$type;
        if (type === "GenerateItemAction") {
            return new GenerateItemAction(
                string2item(a.ItemName),
                getActionRecursive(a.NextAction));
        } else if (type === "ExecuteItemAction") {
            return new ExecuteItemAction(
                string2item(a.ItemName),
                getActionRecursive(a.NextAction));
        } else if (type === "ItemPopPercentUpDownAction") {
            return new ItemPopPercentUpDownAction(
                a.Value,
                getActionRecursive(a.NextAction));
        } else if (type === "HideBallAction") {
            return new HideBallAction(
                getActionRecursive(a.NextAction));
        } else if (type === "RevealBallAction") {
            return new RevealBallAction(
                getActionRecursive(a.NextAction));
        } else if (type.startsWith("ChangeFrontImageAction")) {
            return new ChangeFrontImageAction(
                a.ImageKey, getActionRecursive(a.NextAction)
            );
        } else if (type.startsWith("ChangeBackImageAction")) {
            return new ChangeBackImageAction(
                a.ImageKey, getActionRecursive(a.NextAction)
            );
        } else if (type.startsWith("PlaySoundAction")) {
            return new PlaySoundAction(
                a.SoundKey, getActionRecursive(a.NextAction)
            );
        } else if (type.startsWith("ChangeSoundAction")) {
            return new ChangeSoundAction(
                a.SoundKey, a.SoundType, getActionRecursive(a.NextAction)
            );
        } else if (type === "StockUpDownAction") {
            return new StockUpDownAction(
                a.Value, getActionRecursive(a.NextAction));
        } else if (type === "ForceGameOverAction") {
            return new ForceGameOverAction();
        } else if (type === "WaitAction") {
            return new WaitAction(
                a.Duration, getActionRecursive(a.NextAction)
            );
        } else if (type === "DisplayTimerAction") {
            return new DisplayTimerAction(
                a.Duration, a.FontSize, a.X, a.Y,
                a.SelfRemovable, a.IsCountUp,
                getActionRecursive(a.NextAction)
            );
        } else if (type === "FadeTextAction") {
            return new FadeTextAction(
                a.Text, a.Duration, a.FontSize, a.X, a.Y,
                getActionRecursive(a.NextAction)
            );
        } else if (type === "ShowMessageAction") {
            return new ShowMessageAction(
                a.Message, getActionRecursive(a.NextAction));
        } else if (type === "ConfirmMessageAction") {
            return new ConfirmMessageAction(
                a.Message,
                getActionRecursive(a.NextAction),
                getActionRecursive(a.CancelAction));
        } else if (type === "NoneAction") {
            return new NoneAction();
        } else if (type === "ReloadAction") {
            return new ReloadAction();
        } else if (type === "RedirectAction") {
            return new RedirectAction(a.Url);
        } else if (type === "WriteMemoryAction") {
            return new WriteMemoryAction(
                a.Mode,
                a.Key, a.Value,
                getActionRecursive(a.NextAction)
            );
        } else {
            console.error(a);
            throw "Error in Parse Action";
        }
    }

    function string2item(str) {
        if (str === "Oneup") {
            return OneupItem;
        } else if (str === "Piercing") {
            return PiercingItem;
        } else if (str === "Many") {
            return ManyItem;
        } else if (str === "Wide") {
            return WideItem;
        } else if (str === "Short") {
            return ShortItem;
        } else if (str === "Blink") {
            return BlinkItem;
        } else if (str === "Big") {
            return BigballItem;
        } else if (str === "Ctrl") {
            return CtrlItem;
        } else {
            console.error(str);
            throw "Item name parse error";
        }
    }

    return {
        parse: _parse,
    }
})();
;

// scriptにdeferがついている前提のコードとして記述する。

/** SvgManager
 *  SVGとのインターフェイスの役割を担う．
 *  Ballなど特殊なギミックを含むものは別のクラスに任せる．
 *  なにかと使うのでファイルの最初の方に配置する．*/
const svgm = (function () {
	//private
	const _svgElem = document.getElementById("bb2021");
	const _percentTextElem = document.getElementById("bb-percent-text");
	const _curtain = document.getElementById("bb-loading-curtain");
	//public
	return {
		showCurtainAsync() {
			const anim = _curtain.animate({
				opacity: 1,
			}, {
				fill: "forwards",
				duration: 0,
			});
			anim.onfinish = anim.commitStyles;
			return anim.finished;
		},
		hideCurtainAsync() {
			const anim = _curtain.animate({
				opacity: 0,
			}, {
				fill: "forwards",
				duration: 1000,
			});
			anim.onfinish = anim.commitStyles;
			return anim.finished;
		},
		setStockText(x) {
			document.getElementById("bb-stock-text").textContent = `Stock ${x}`;
		},
		setStageText(x) {
			document.getElementById("bb-stage-text").textContent = `Stage ${x}/${ep.nStage}`;
		},
		setPercentText() {
			_percentTextElem.textContent = `${blocks.breakPercent}% / ${stages.current.requirePercent}%`;
		},
		svgBump(dir) {
			if (dir === undefined) {
				dir = cointoss() ?
					cointoss() ? "left" : "right" :
					cointoss() ? "up" : "down";
			}
			//毎回上書きするので消す必要なし
			_svgElem.setAttribute("class", `bb2021--bump-${dir}`);
		},
		showFailed() {
			document.getElementById("bb-failed-text").setAttribute("visibility", "visible");
		},
		hideFailed() {
			document.getElementById("bb-failed-text").setAttribute("visibility", "hidden");
		},
		showStageClear() {
			document.getElementById("bb-clear-text").textContent = "Stage clear!";
		},
		hideStageClear() {
			document.getElementById("bb-clear-text").textContent = "";
		},
		showGameClear() {
			document.getElementById("bb-clear-text").textContent = "Game clear!";
			document.getElementById("bb-clearnavi").setAttribute("visibility", "visible");
		},
	}
})();




// ここでゲームを起動する。
// deferを必要とするがDOMContentLoadedは不要
(async function startup() {
	await _validatePassword()
	game.run();

	/**
	 * パスワードを正解するまで確認する。
	 */
	async function _validatePassword() {
		//パスワードがから文字列の時は例外としてパスワードなしとして扱うことにする。
		if (ep.passwordHash === "") { return; }
		while (true) {
			const passwordText = window.prompt("Input password");
			if (passwordText === null) { continue; }

			//ref:https://developer.mozilla.org/ja/docs/Web/API/SubtleCrypto/digest
			//Uint8Array(utf-8)
			const msgUint8 = new TextEncoder().encode(passwordText);
			//ArrayBuffer
			const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
			//uint8(number)
			const hashArray = Array.from(new Uint8Array(hashBuffer));
			//16進数文字列（2桁表示）
			const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
			if (ep.passwordHash === hashHex) { break; }
		}
	}
})();






// ゲームを何回も動かすのでシングルトンよりもクラスにしてゲームプレイごとに
// インスタンスを作る方が適切な気がしてきた。
/**ゲームの流れを動かすオブジェクト */
const game = (function () {
	//起動時のみ初期化する変数
	let _isRetry = false;
	//ゲームごとに初期化する変数
	let _stock = ep.defStock;
	//ステージごとに初期化する変数
	//ループごとに変化する変数
	let _beforeT;

	/**
	 * ゲームの状態を操作、管理するオブジェクト
	 * 各種特殊状態が複雑で競合しかねないのでここで一括管理する。
	 */
	class GameState {
		// Padで加速させない（バグ防止）
		// ゲームエリア外にださない（Fail条件未満維持）
		// ブロック壊させない（状態維持）
		// dt延長による半無限処理はあるかもだが通常時も同様なので無視
		isGameOver = false;

		isForceGameOverFlagged = false;

		// Padで加速させない（バグ防止）
		// ゲームエリア外にださない（Fail条件未満維持）
		// アイテム取得禁止
		// スマッシュ禁止
		#isFlashMode = false;
		get isFlashMode() { return this.#isFlashMode; }
		set isFlashMode(v) {
			if (this.#isFlashMode === v) { return; }
			this.#isFlashMode = v;
			if (v === false) {
				this.#flashAfterGrow = true;
				(
					/**
					 *  @param {GameState} stat 
					 * @returns 
					 */
					function loop(stat) {
						if (bm.head !== null && bm.head.v.y < 0) {
							state.#flashAfterGrow = false;
							return;
						}
						requestAnimationFrame(loop);
					})(this);
			}
		}
		/**Flashのあとボールがまだ下向きならばTrue */
		#flashAfterGrow = false;

		//// ↑主状態変数 ////
		//// ↓主状態変数に依存するプロパティ ////

		get canBreakBlock() { return !this.isGameOver; }
		get canAccelerate() { return (!this.isGameOver) && (!this.isFlashMode) }
		get canFail() { return !(this.isGameOver || this.isFlashMode || this.#flashAfterGrow); }
		get canSmash() { return !this.isFlashMode; }
		get canGetItem() { return !this.isFlashMode; }
	}
	let state = new GameState();


	/**Holdingの状態管理を行う。
	 * 具体的なHolding処理は行わない。*/
	const launcher = (function () {
		let _isHolding = true;
		function _hold() {
			_isHolding = true;
		}
		function _release() {
			if (game.isPausing) { return; }
			if (!_isHolding) { return; }
			_isHolding = false;
			sm.callHoldoffSeAsync();
			if (_onRelease) {
				_onRelease();
				_onRelease = undefined;
			}
		}
		//簡単のため仕様として一つしか登録できない。一度しか実行できない。
		let _onRelease = () => { };

		const target = document.getElementById("bb2021");
		//for mouse
		target.addEventListener("click", _release, { passive: true });
		//for touch
		target.addEventListener("touchend", _release, { passive: true });

		return {
			get isHolding() { return _isHolding; },
			Hold: _hold,
			Release: _release,
			set onRelease(value) { _onRelease = value; }
		}
	})();


	{
		const target = document.getElementById("bb2021");
		// pause //
		target.addEventListener("touchstart", (e) => {
			if (game.holding) { return; }
			if (e.touches.length <= 2) { return; }
			_lm.switch();
		}, { passive: true });
		document.addEventListener("keydown", (e) => {
			if (game.holding) { return; }
			if (e.key.length !== 1) { return; }
			// とりあえず簡単に実装。
			//ArrowとEscは受け付けない。（うけつけるとConfigと干渉する。）
			// TODO：きちんとしたアルファベットのみ受付
			_lm.switch();
		}, { passive: true });
	}


	/**ゲームを起動する */
	async function _run() {
		if (!loader.isInitialized) {
			requestAnimationFrame(_run);
			return;
		}

		svgm.setStockText(_stock);
		await _buildFirstStage();
		await new Promise(res => setTimeout(res, 200));

		blocks.onBreakPercentChanged = () => {
			em.onBreakPercent.invoke();
		};

		//音楽再生のために一度クリックしてもらう
		const startTextElem = document.getElementById("bb-start-text");
		startTextElem.setAttribute("visibility", "visible");
		// 音楽が再生されるまでここのPromiseで止まる
		await new Promise((resolve, reject) => {
			requestAnimationFrame(callback);
			function callback() {
				if (sm.isPlaying) {
					resolve();
					return;
				}
				requestAnimationFrame(callback);
			}
		});
		startTextElem.setAttribute("visibility", "hidden");


		// iPhoneにおいて一瞬だけBGMが鳴る。（invokeでMessageEventだとすぐに止まるため）
		// 一瞬だけですぐ途切れるのが醜いのでせめて最速でinvokeを呼ぶ。
		em.beforeStageStart.invoke();
		_lm.start();
		launcher.onRelease = em.afterStageStart.invoke;
		launcher.Hold();
	}


	/**次のステージを構成する */
	async function _buildFirstStage() {
		// await svgm.showCurtain();

		const loadStagePromise = stages.goToFirstAsync();

		bm.deleteAll();
		bm.add(new Ball());

		dim.deleteAll();
		uim.setNoItem();

		comboCounter.reset();

		await loadStagePromise;
		svgm.hideCurtainAsync();
		await blockEffecter.popAllAsync();
	}

	/**次のステージを構成する */
	async function _buildNextStage() {
		blockEffecter.reset();
		await svgm.showCurtainAsync();

		const loadStagePromise = stages.goToNextAsync();

		bm.deleteAll();
		bm.add(new Ball());

		dim.deleteAll();
		uim.setNoItem();

		comboCounter.reset();
		_timer.reset();
		DisplayTimerAction.deleteAll();

		await loadStagePromise;
		svgm.hideCurtainAsync();
		await blockEffecter.popAllAsync();
		await new Promise(res => setTimeout(res, 200));
		em.beforeStageStart.invoke();
		launcher.onRelease = em.afterStageStart.invoke;
		launcher.Hold();
	}


	/**ゲームループ
	 * @param {number} nowT requestAnimationFrameから与えられる値
	 */
	async function _loop(nowT) {
		const dt = nowT - _beforeT;//[msec]
		_beforeT = nowT;

		if (launcher.isHolding) {
			bm.gotoHead();//ballが1個だけの前提
			bm.nowNode.x = pad.x;
		} else {
			uim.beforeCollisionAction();
			bm.gotoHead();
			while (bm.nowNode !== null) {
				const vxy = bm.nowNode.v.ActualXY;
				_collision(bm.nowNode, vxy[0] * dt, vxy[1] * dt);
				bm.gotoNext();
			}
		}

		blocks.drawnow();
		bm.sweep();
		bm.moveSvgAll();
		pad.recordBeforeX();
		if (launcher.isHolding) { return; }
		dim.collision(pad, dt);
		uim.tick(dt);
		_timer.increment(dt);

		//stage clear
		if (blocks.breakPercent >= stages.current.requirePercent) {
			_lm.pause();
			const hidePromise = blockEffecter.hideAllAsync();
			const gameClear = stages.isFinal;
			let sePromise;
			await _promiseManager.wait();
			if (gameClear) {
				svgm.showGameClear();
				sm.killBgm();
				sePromise = sm.callGameClearSeAsync();
			} else {
				svgm.showStageClear();
				sePromise = sm.callStageClearSeAsync();
			}
			await sePromise;
			await hidePromise;
			//適度な間をとる
			await new Promise(res => setTimeout(res, 500));
			em.onStageFinish.invoke();
			if (gameClear) {
				em.onGameClear.invoke();
			}
			await new Promise(res => setTimeout(res, 1000));
			if (gameClear) {
				const target = document.getElementById("bb2021");
				target.addEventListener("touchstart", nextPageNavigator.execute);
				target.addEventListener("click", nextPageNavigator.execute);
			} else {
				setTimeout(
					async () => {
						svgm.hideStageClear();
						await _buildNextStage();
						_lm.resume();
					}
					, 0);
			}
			return;
		}

		//fail
		if (bm.noBall) {
			if (_stock <= 0) {
				_gameOverProcedure();
			} else {
				_lm.pause();
				const sePromise = sm.callFailSeAsync();
				_stock--;
				comboCounter.reset();
				svgm.setStockText(_stock);
				svgm.showFailed();
				await sePromise;
				await new Promise(res => setTimeout(res, 200));
				em.onFail.invoke();
				setTimeout(() => {
					svgm.hideFailed();
					launcher.Hold();
					bm.deleteAll();
					bm.add(new Ball());
					uim.setNoItem();
					_lm.resume();
				}, 0);
			}
			return;
		}

		if (state.isForceGameOverFlagged) {
			_gameOverProcedure();
			return;
		}
	}

	/** ゲームオーバーにする。ストック数にはかかわらず処理を行う。*/
	async function _gameOverProcedure() {
		if (state.isGameOver) {
			// dt延長によりAuto中もGameOverになってしまうことがある
			// 2025/02/01たぶん直せたと思うけど一応そのまま
			bm.add(new Ball());
			launcher.Hold();
			launcher.Release();
			return;
		}

		const sePromise = sm.callFailSeAsync();
		//gameover
		document.getElementById("bb-gameover-text").setAttribute("visibility", "visible");

		state.isGameOver = true;
		bm.add(new Ball());
		dim.deleteAll();
		uim.setNoItem();
		comboCounter.reset();
		_timer.reset();
		DisplayTimerAction.deleteAll();
		launcher.Hold();
		launcher.Release();

		// sm.killBgm();威力ありすぎ。保留
		await sePromise;
		await new Promise(res => setTimeout(res, 200));
		em.onGameOver.invoke();




		const target = document.getElementById("bb2021");
		target.addEventListener("touchstart", clickRetryCallback);
		target.addEventListener("click", clickRetryCallback);
		async function clickRetryCallback() {
			target.removeEventListener("touchstart", clickRetryCallback);
			target.removeEventListener("click", clickRetryCallback);
			_lm.pause();
			await _retry();
		}
	}

	/** Game over状態から最初のステージに移動する */
	async function _retry() {
		//主に前回プレイ時のデータを消して初期化を行う。
		//ゲーム開始処理は通常の_runを呼ぶ。
		document.getElementById("bb-gameover-text").setAttribute("visibility", "hidden");
		em.reset();//初回は勝手にロードするが2回目以降は明示的にリセットが必要
		blocks.reset();//初回は勝手にロードするが2回目以降は明示的にリセットが必要
		_stock = ep.defStock;
		state = new GameState();
		_timer.reset();
		DisplayTimerAction.deleteAll();
		ballHideEffector.reset();

		nextPageNavigator.reset();

		sm.killBgm();

		_isRetry = true;
		_run();
	}

	/**row行col列のブロックを1回たたく．
	 * ブロックのライフが0以下になったらブロックを見えなくする．
	 * @param {number} row 行
	 * @param {number} col 列
	 * @param {number} [count=1] たたく回数
	 * @param {boolean} 壊したら（existの状態が変わったら）true
	 * */
	function _hitBlock(row, col, count = 1) {
		if (!blocks.isExist(row, col)) {
			return false;
		}
		if (!state.canBreakBlock) {
			blockEffecter.shine(row, col);
			return;
		}
		const isBroke = blocks.hit(row, col, count);
		if (isBroke) {
			const blockW = 1 / blocks.nCol;
			const blockH = blocks.bBound / blocks.nRow;
			const x = blockW * col + blockW / 2;
			const y = blockH * row + blockH / 2;
			comboCounter.increment(x, y);
			dim.addNewItem(x, y);
			svgm.setPercentText();
		} else {
			blockEffecter.shine(row, col);
		}
		return isBroke;
	}

	// cycle回連続でブロックを破壊できなかったらボール軌道を歪める
	let _blockReflectCount = 0;
	const _blockReflectCycle = 20;
	/**ボールの衝突判定を行う
	 * 対象のボールballがvx,vy移動したときにブロックやパドル，壁と衝突するか
	 * 判定し，衝突するならば衝突時の処理を行う．ボールをvx,vyだけ進めたら終了する
	 * @param {Ball} ball 対象のボール
	 * @param {number} vx x方向移動距離
	 * @param {number} vy y方向移動距離*/
	function _collision(ball, vx, vy) {
		let minT = 10000;
		let hitInfo = "";
		function updateMinT(newT, newInfo) {
			if (newT < minT) {
				minT = newT;
				hitInfo = newInfo;
			}
		}

		// Bigballを使った時など壁に埋まったときの復旧
		if (ball.top < 0 && ball.v.y < 0 && vy < 0) {
			ball.v.y *= -1;
			vy *= -1;
		}
		if ((ball.left < 0 && ball.v.x < 0 && vx < 0) ||
			(ball.right > 1 && ball.v.x > 0 && vx > 0)) {
			ball.v.x *= -1;
			vx *= -1;
		}
		if ((!state.canFail) && 1 < ball.bottom && 0 < vy) {
			ball.v.y *= -1;
			vy *= -1;
		}
		// ユーザーフレンドリーのためにBigballでパドルに埋まったときも復旧することにした
		//パドルを横から差し込んでボールを復旧させるズルができるのでBigのときのみ
		if (uim.usingItem.name === BigballItem.name) {
			if (ball.bottom > pad.top && ball.v.y > 0 && vy > 0) {
				const isInside_lr =
					(pad.left <= ball.left && ball.left <= pad.right) ||
					(pad.left <= ball.right && ball.right <= pad.right);
				const isInside_tb = ball.top < pad.top;
				if (isInside_lr && isInside_tb) {
					ball.v.y *= -1;
					vy *= -1;
				}
			}
		}

		//最初にぶつかる物体を求める．
		{//xDirection
			const l2r = vx > 0;
			const colBegin = l2r ?
				Math.ceil(ball.right * blocks.nCol) :
				Math.floor(ball.left * blocks.nCol - 1);
			const colEnd = l2r ?
				Math.floor((ball.right + vx) * blocks.nCol) :
				Math.ceil((ball.left + vx) * blocks.nCol - 1);
			const colInc = l2r ? +1 : -1;
			let col;
			function statL2R() { return col <= colEnd; }
			function statR2L() { return col >= colEnd; }
			const stat = l2r ?
				statL2R : statR2L;
			colOuter: for (col = colBegin; stat.call(); col += colInc) {
				const x = l2r ?
					col / blocks.nCol - ball.xr :
					(col + 1) / blocks.nCol + ball.xr;
				const y = interp1(ball.x, ball.y, ball.x + vx, ball.y + vy, x);
				if (0 <= col && col < blocks.nCol) {
					//blocks
					const rowBegin = Math.floor((y - ball.yr) / blocks.bBound * blocks.nRow);
					const rowEnd = Math.floor((y + ball.yr) / blocks.bBound * blocks.nRow);
					if (rowBegin < 0) continue;//上のかべに埋まってる．
					//NOTE:ここらへんの条件ほんとにあってる？要確認．
					for (let row = rowBegin; row <= rowEnd; row++) {
						if (blocks.nRow <= row) continue;
						if (blocks.isExist(row, col)) {
							const t = dist(ball.x, ball.y, x, y);
							updateMinT(t, l2r ? "lBlock" : "rBlock");
							break colOuter;
						}
					}
				} else if (ball.yr < y && y < 1 - ball.yr) {
					//walls (col==-1 or col==ep.nCol)
					// 壁から出るなら阻害しない
					if ((l2r && col < 0) || (!l2r && blocks.nCol <= col)) continue;
					const t = dist(ball.x, ball.y, x, y);
					updateMinT(t, l2r ? "r" : "l");
				}
			}
		}

		{//yDirection
			const t2b = vy > 0;
			const rowBegin = t2b ?
				Math.ceil(ball.bottom / blocks.bBound * blocks.nRow) :
				Math.floor(ball.top / blocks.bBound * blocks.nRow - 1);
			const rowEnd = t2b ?
				Math.floor((ball.bottom + vy) / blocks.bBound * blocks.nRow) :
				Math.ceil((ball.top + vy) / blocks.bBound * blocks.nRow - 1);
			const rowInc = t2b ? +1 : -1;
			let row;
			function statT2B() { return row <= rowEnd; }
			function statB2T() { return row >= rowEnd; }
			const stat = t2b ?
				statT2B : statB2T;
			rowOuter: for (row = rowBegin; stat.call(); row += rowInc) {
				const y = t2b ?
					row * blocks.bBound / blocks.nRow - ball.yr :
					(row + 1) * blocks.bBound / blocks.nRow + ball.yr;
				const x = interp1(ball.y, ball.x, ball.y + vy, ball.x + vx, y);
				if (0 <= row && row < blocks.nRow) {
					//blocks
					const colBegin = Math.floor((x - ball.xr) * blocks.nCol);
					const colEnd = Math.floor((x + ball.xr) * blocks.nCol);
					if (colBegin < 0) continue;//左のかべに埋まってる．
					for (let col = colBegin; col <= colEnd; col++) {
						if (blocks.nCol <= col) continue;
						if (blocks.isExist(row, col)) {
							const t = dist(ball.x, ball.y, x, y);
							updateMinT(t, t2b ? "tBlock" : "bBlock");
							break rowOuter;
						}
					}
				} else if (row >= blocks.nRow) {
					//There is no bottom wall.
					continue;
				} else if (ball.xr < x && x < 1 - ball.xr) {
					//row<=-1
					//Top wall
					if (t2b) continue;
					const t = dist(ball.x, ball.y, x, y);
					updateMinT(t, "t");
				}
			}
		}

		if ((!state.canFail) && vy > 0 && ball.bottom < 1 && 1 < ball.bottom + vy) {
			const hitY = 1 - ball.yr;
			const hitX = interp1(ball.y, ball.x, ball.y + vy, ball.x + vx, 1);
			const t = dist(ball.x, ball.y, hitX, hitY);
			updateMinT(t, "b");
		}

		//pad
		if (vy > 0 && ball.bottom < pad.top && ball.bottom + vy > pad.top) {
			const hitY = pad.top - ball.yr;
			const hitX = interp1(ball.y, ball.x, ball.y + vy, ball.x + vx, hitY);
			if (pad.left - ball.xr < hitX && hitX < pad.right + ball.xr) {
				const t = dist(ball.x, ball.y, hitX, hitY);
				updateMinT(t, "pad");
			}
		}

		if (hitInfo === "" && vy > 0 && ball.bottom + vy > pad.top) {
			const l2r = vx > 0;//ball direction
			const a1 = l2r ? ball.right : ball.left;
			const a2 = a1 + vx;
			const b1 = l2r ? pad.beforeLeft : pad.beforeRight;
			const b2 = l2r ? pad.left : pad.right;
			if (Math.abs(a2 - a1 + b1 - b2) >= 0.0001) {
				const hitX = a1 + (a2 - a1) * (b1 - a1) / (a2 - a1 + b1 - b2);
				if ((a1 <= hitX && hitX <= a2) || (a2 <= hitX && hitX <= a1)) {
					const hitY = interp1(a1, ball.y, a2, ball.y + vy, hitX);
					if (pad.top - ball.yr <= hitY && hitY <= pad.bottom + ball.yr) {
						const t = dist(a1, ball.y, hitX, hitY);
						updateMinT(t, "padSide");
					}
				}
			}
		}


		if (hitInfo === "") {
			ball.x += vx;
			ball.y += vy;
			ball.tailEffector.update();
			return;
		}

		const ratio1 = minT / length(vx, vy);
		const ratio2 = 1 - ratio1;
		ball.x += vx * ratio1;
		ball.y += vy * ratio1;
		let nextVx = vx * ratio2;
		let nextVy = vy * ratio2;

		// Effect //
		ball.tailEffector.update();

		if (hitInfo === "r" || hitInfo === "l" || hitInfo === "padSide") {
			if (hitInfo === "padSide") {
				pad.causeHitEffect();
				sm.callPadSeAsync();
				em.onHitPaddle.invoke(pad.width === pad.coreWidth);
				comboCounter.reset();
			} else {
				sm.callWallSeAsync();
			}
			ball.v.x *= -1;
			nextVx *= -1;
		} else if (hitInfo === "t") {
			ball.v.y *= -1;
			nextVy *= -1;
			sm.callWallSeAsync();
		} else if (hitInfo === "b") {
			ball.v.y *= -1;
			nextVy *= -1;
		} else if (hitInfo === "pad") {
			comboCounter.reset();
			pad.causeHitEffect();
			const isCore = Math.abs(ball.x - pad.x) <= pad.coreWidth / 2;
			if (state.canSmash && isCore) {
				ball.mode = Ball.modeTypes.penetration;
				ball.v.smashed = true;
				ball.v.y *= -1;
				nextVy *= -1;
			} else {
				if (uim.usingItem.name !== PiercingItem.name) ball.mode = Ball.modeTypes.normal;
				ball.v.smashed = false;
				const xAxis = (ball.x - pad.x) / ((pad.width / 2) + ball.xr);
				ball.v.rotateToUpper(xAxis);

				const ballV = length(ball.v.x, y2x(ball.v.y));
				const nextV = length(nextVx, nextVy);
				nextVx = nextV * (ball.v.x / ballV);
				nextVy = nextV * (x2y(ball.v.y) / ballV);

			}
			if (state.canAccelerate) {
				ball.v.accelerate();
			}
			sm.callPadSeAsync();
			em.onHitPaddle.invoke(isCore);
			if (isCore) {
				em.onHitPaddleCore.invoke();
			}
		} else if (hitInfo === "lBlock" || hitInfo === "rBlock") {
			const col = hitInfo === "lBlock" ?
				Math.round((ball.right) * blocks.nCol) :
				Math.round((ball.left) * blocks.nCol - 1);
			const rowBegin = Math.floor((ball.top) / blocks.bBound * blocks.nRow);
			const rowEnd = Math.floor((ball.bottom) / blocks.bBound * blocks.nRow);
			//何かしら壊れず残っていたらTrue
			let anyRemain = false;
			//何かしら壊したらTrue
			let anyBroken = false;
			const hitPower = ball.mode === Ball.modeTypes.penetration ? 999 : 1;
			//_hitBlockの中で処理してしまうと複数グループを同時にたたいた時に少し困る。
			//たたいたブロックのグループ一覧
			const groupSet = new Set;
			for (let row = rowBegin; row <= rowEnd; row++) {
				if (row >= blocks.nRow) { continue };
				if (blocks.isExist(row, col)) {
					anyBroken |= _hitBlock(row, col, hitPower);
					ball.invokeHitEffect("lr");
					for (const g of blocks.getBlock(row, col).groups) {
						groupSet.add(g);
					}
				}
				anyRemain |= blocks.isExist(row, col);
			}
			for (const g of groupSet.keys()) {
				em.onHitBlockBroup.invoke(g);
			}
			//通常時：たたいたら必ず反射。たたかなければ直進（そも衝突しているので考えなくてよい）
			//Pier：壊せなければ（破壊不能ブロックならば）（最後ブロックが残っているならば）反射、他は直進
			if (ball.causePenetrationEffect() && anyBroken) { svgm.svgBump(); }
			if (ball.mode === Ball.modeTypes.penetration) {
				if (anyRemain) {
					ball.v.x *= -1;
					nextVx *= -1;
					sm.callWallSeAsync();
				}
			} else {
				ball.v.x *= -1;
				nextVx *= -1;
				sm.callWallSeAsync();
			}
			if (anyRemain) {
				_blockReflectCount++;
				if (_blockReflectCount % _blockReflectCycle === 0) {
					ball.v.rotateToSmallRandom();
					// 無限ループ対策としてはVx, Vyを変えなくてもBallだけ変えれば十分
				}
			} else {
				_blockReflectCount = 0;
			}
		} else if (hitInfo === "tBlock" || hitInfo === "bBlock") {
			const row = hitInfo === "tBlock" ?
				Math.round((ball.bottom) / blocks.bBound * blocks.nRow) :
				Math.round((ball.top) / blocks.bBound * blocks.nRow - 1);
			const colBegin = Math.floor((ball.left) * blocks.nCol);
			const colEnd = Math.floor((ball.right) * blocks.nCol);
			let anyRemain = false;
			let anyBroken = false;
			const hitPower = ball.mode === Ball.modeTypes.penetration ? 999 : 1;
			const groupSet = new Set;
			for (let col = colBegin; col <= colEnd; col++) {
				if (col >= blocks.nCol) continue;
				if (blocks.isExist(row, col)) {
					anyBroken |= _hitBlock(row, col, hitPower);
					ball.invokeHitEffect("tb");
					for (const g of blocks.getBlock(row, col).groups) {
						groupSet.add(g);
					}
				}
				anyRemain |= blocks.isExist(row, col);
			}
			for (const g of groupSet.keys()) {
				em.onHitBlockBroup.invoke(g);
			}
			if (ball.causePenetrationEffect() && anyBroken) { svgm.svgBump(); }
			if (ball.mode === Ball.modeTypes.penetration) {
				if (anyRemain) {
					ball.v.y *= -1;
					nextVy *= -1;
					sm.callWallSeAsync();
				}
			} else {
				ball.v.y *= -1;
				nextVy *= -1;
				sm.callWallSeAsync();
			}
			if (anyRemain) {
				_blockReflectCount++;
				if (_blockReflectCount % _blockReflectCycle === 0) {
					ball.v.rotateToSmallRandom();
				}
			} else {
				_blockReflectCount = 0;
			}
		}
		else {
			throw new Error("hitInfo has wrong value. value:" + hitInfo);
		}
		_collision(ball, nextVx, nextVy);
	}


	/**"loopManager"
	 * requestAnimationFrameによるゲームループを管理するクラス．
	 */
	const _lm = (function (loopFunc) {
		let _reqId;
		let _callback = async (now) => {
			_reqId = requestAnimationFrame(_callback);
			await loopFunc(now);
		}
		let _isPausing = true;
		return {
			start() {
				_beforeT = performance.now();
				_reqId = requestAnimationFrame(_callback);
				_isPausing = false;
			},
			pause() {
				cancelAnimationFrame(_reqId);
				_isPausing = true;
			},
			/**loopを再開する。startしていなければ再開しない。 */
			resume() {
				if (_reqId === undefined) { return; }
				_beforeT = performance.now();
				_reqId = requestAnimationFrame(_callback);
				_isPausing = false;
			},
			switch() {
				_isPausing ?
					this.resume() : this.pause();
			},
			get isPausing() { return _isPausing; },
		}
	})(_loop);


	/**ゲームの実行時間を管理するタイマー */
	const _timer = (function () {
		let sum = 0;
		let nowSec = 0;
		/** @type {_handler[]}*/
		let handlerList = [];

		/** @param {Number} value 経過したミリ秒*/
		function _increment(value) {
			sum += value;
			const sec = Math.round(sum / 1000);
			if (nowSec === sec) { return; }
			nowSec = sec;
			handlerList.forEach(h => {
				if (h.isWaiting) { return; }
				h.action(h.waitingTime);
			});
			handlerList = handlerList.filter(h => h.isWaiting || h.isRepeatable);
		}
		function _reset() {
			sum = 0;
			nowSec = 0;
			handlerList = [];
		}

		/**
		 * @param {_handler} handler 
		 */
		function _addEventHandler(handler) {
			handler.registerTime = nowSec;
			handlerList.push(handler);
		}
		// resetするのでremoveは実装しないでおく。

		class _handler {
			duration = 1;//sec
			action = () => { };
			registerTime = 0;
			isRepeatable = false;
			get waitingTime() { return nowSec - this.registerTime; }
			get isWaiting() { return this.waitingTime < this.duration; }
			/**
			 * @param {Number} duration 初回実行を待つ時間（秒）
			 * @param {*} action
			 * @param {boolean} isRepeatable */
			constructor(duration, action, isRepeatable = false) {
				this.duration = duration;
				this.action = action;
				this.isRepeatable = isRepeatable
			}
		}
		return {
			increment: _increment,
			reset: _reset,
			addEventHandler: _addEventHandler,
			Handler: _handler,
		}
	})();


	/**実行中のPromiseがないか管理する */
	const _promiseManager = (function () {
		/**@type {Promise[]} */
		let _list = [];

		/** 
		 * @param {Promise} promise 
		 */
		function _register(promise) {
			_list.push(promise);
			promise.then(() => {
				_list = _list.filter(p => p !== promise);
			});
		}
		function _isEmpty() {
			return _list.length === 0;
		}
		function _wait() {
			return new Promise((res, rej) => {
				requestAnimationFrame(recursive);
				function recursive() {
					if (_isEmpty()) {
						res();
					} else {
						requestAnimationFrame(recursive);
					}
				}
			});
		}
		return {
			regster: _register,
			wait: _wait,
		}
	})();


	return {
		run: _run,
		hitBlock: _hitBlock,
		Loop: _lm,
		get isPausing() { return _lm.isPausing; },
		set stock(value) {
			_stock = value;
			svgm.setStockText(_stock);
		},
		get stock() { return _stock; },
		get State() { return state; },
		//incrementなどまで一緒に公開されてしまうが簡単のため丸ごと公開
		timer: _timer,
		get isRetry() { return _isRetry; },
		PromiseManager: _promiseManager,
	}
})();
;

// stagesの実装に依存する。
// eventから呼ばれる。

const nextPageNavigator = (function () {
    const _destinationIsExternalUrl = ep.clearPageHref !== "";
    function _execute() {
        if (_destinationIsExternalUrl) {
            _goExternalUrl();
        } else {
            _goRewardPage();
        }
    }
    function _goExternalUrl() {
        window.parent.location.href = ep.clearPageHref;
    }

    // fill([])だと同じ配列がステージ数分並んでしまう
    let extraForeHrefList = new Array(stages.length).fill().map(() => []);
    let extraBackHrefList = new Array(stages.length).fill().map(() => []);

    function _reset() {
        extraForeHrefList = new Array(stages.length).fill().map(() => []);
        extraBackHrefList = new Array(stages.length).fill().map(() => []);
    }

    // ステージロード時に画像ロード終了を確実に把握するために、href=""をしている。
    // 安易にaddEventlistenerでは解決できない。
    // 画像を差し替えるときに明示的にメソッドを呼ぶことにする。
    /**
     *  @param {string} href 
     */
    function _registerExtraForeHref(href) {
        extraForeHrefList[stages.currentIndex].push(href);
    }
    /**
     * 
     * @param {string} href 
     */
    function _registerExtraBackHref(href) {
        extraBackHrefList[stages.currentIndex].push(href);
    }

    function _goRewardPage() {
        const container = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = "クリックで画像が切り替わります。"
        container.appendChild(p);
        for (let i = 0; i < stages.length; i++) {
            // NOTE
            // addEventListenerをしても動かなかった。
            const img_f = document.createElement("img");
            img_f.setAttribute("src", ep.imageResourceList.find(
                e => e.name === stages.list[i].foreImageName).url);
            img_f.classList.add("bb-reward__image");
            const hrefList = [
                ep.imageResourceList.find(
                    e => e.name === stages.list[i].foreImageName).url,
                ...extraForeHrefList[i],
                ep.imageResourceList.find(
                    e => e.name === stages.list[i].backImageName).url,
                ...extraBackHrefList[i],
            ];
            img_f.dataset.hrefList = JSON.stringify(hrefList);
            img_f.dataset.i = 0;
            container.appendChild(img_f);
        }
        document.getElementById("bb2021").replaceWith(container);
        document.body.classList.add("bb-body--reward");
    }

    return {
        execute: _execute,
        registerExtraForeHref: _registerExtraForeHref,
        registerExtraBackHref: _registerExtraBackHref,
        reset: _reset,
    }
})();


{
    document.addEventListener("click", (e) => {
        if (!e.target?.classList?.contains("bb-reward__image")) { return; }
        const elem = e.target;
        elem.dataset.i++;
        const hrefList = JSON.parse(elem.dataset.hrefList);
        if (elem.dataset.i >= hrefList.length) {
            elem.dataset.i = 0;
        }
        elem.src = hrefList[elem.dataset.i];
    })
}
