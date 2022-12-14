{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"EmptyScene",
			"sky":{
				"material":{
					"type":"Laya.SkyPanoramicMaterial",
					"path":"Assets/DamagedHelmet/SkyMaterial.lmat"
				},
				"mesh":"SkyDome"
			},
			"ambientColor":[
				1,
				1,
				1
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/EmptySceneGIReflection.ltcb",
			"reflectionIntensity":1,
			"ambientMode":1,
			"ambientSphericalHarmonics":[
				0.6806948,
				0.3144366,
				0.1824573,
				-0.5429527,
				-0.2919062,
				0.1494765,
				-0.04785053,
				-0.32478,
				0.2409932,
				0.7215599,
				0.4042486,
				0.1672212,
				-0.5533049,
				-0.2830718,
				0.1361479,
				-0.03835218,
				-0.3057748,
				0.2289081,
				0.6896445,
				0.49126,
				0.1181568,
				-0.4735765,
				-0.234496,
				0.1025661,
				-0.0187978,
				-0.2453711,
				0.1690685
			],
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"instanceID":0,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						-3
					],
					"rotation":[
						0,
						1,
						0,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"orthographicVerticalSize":10,
					"fieldOfView":60,
					"enableHDR":false,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0
					]
				},
				"components":[],
				"child":[]
			}
		]
	}
}