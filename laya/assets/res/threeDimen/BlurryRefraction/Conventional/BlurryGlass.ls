{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"LayaMonkey",
			"sky":{
				"material":{
					"type":"Laya.SkyBoxMaterial",
					"path":"Assets/RPG_FPS_game_assets_industrial/Textures/Skyboxes/Skybox_v1/Skybox_v1.lmat"
				},
				"mesh":"SkyBox"
			},
			"ambientColor":[
				1,
				1,
				1
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/LayaMonkey/LayaMonkeyGIReflection.ltcb.ls",
			"reflectionIntensity":1,
			"ambientMode":1,
			"ambientSphericalHarmonics":[
				0.09839606,
				0.03053864,
				-0.0042118,
				0.0637676,
				0.03115145,
				-0.0004275888,
				-0.002177906,
				8.118339E-06,
				0.02413621,
				0.2644621,
				0.08637775,
				-0.006175242,
				0.0673315,
				0.04076814,
				-0.002626933,
				-0.002133662,
				0.005158663,
				0.02222755,
				0.4783414,
				0.1476572,
				-0.006735861,
				0.05444136,
				0.03602736,
				-0.003449079,
				-0.003278801,
				0.009673165,
				0.009171749
			],
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":10,
			"fogRange":10,
			"fogColor":[
				1,
				0,
				0
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
						0.5413697,
						2.915479,
						4.72047
					],
					"rotation":[
						-0.07138657,
						0.02991669,
						0.002083807,
						0.9969978
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
						0.7924528,
						0.7214311,
						0.7214311,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"instanceID":1,
				"props":{
					"name":"Directional light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-21.47881,
						109.2226,
						120.6995
					],
					"rotation":[
						0.3623709,
						0.003946282,
						0.00154119,
						-0.9320244
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":0,
					"color":[
						0.1603774,
						0.1603774,
						0.1603774
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":2,
				"props":{
					"name":"floor",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-1.657009E-05,
						0.9783633,
						-0.007702351
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						0.66877,
						0.66877,
						0.66877
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/New Material 1.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":3,
				"props":{
					"name":"Capsule",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						2.33,
						1.82,
						-2.02
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Capsule.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/Effect_waibao/FX_fbx/longzhili/Materials/baoxiang.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":4,
				"props":{
					"name":"Capsule (1)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0.2299999,
						1.82,
						-2.02
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Capsule.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/RPG_FPS_game_assets_industrial/Barrels/Barrel_v1/Source/Barrel_v1.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":5,
				"props":{
					"name":"Capsule (2)",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-1.7,
						1.82,
						-2.02
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Capsule.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"type":"Laya.BlinnPhongMaterial",
							"path":"Assets/Materials/blue.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":6,
				"props":{
					"name":"glass01",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						1.256,
						1.75,
						0.7
					],
					"rotation":[
						-0.7071068,
						0,
						0,
						-0.7071068
					],
					"scale":[
						0.19819,
						0.19819,
						0.19819
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/37NewScene/effect.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":7,
				"props":{
					"name":"glass02",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.7199999,
						1.75,
						0.7
					],
					"rotation":[
						-0.7071068,
						0,
						0,
						-0.7071068
					],
					"scale":[
						0.19819,
						0.19819,
						0.19819
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/37NewScene/effect.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"MeshColliderShape",
								"mesh":"Library/unity default resources-Plane.lm"
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			}
		]
	}
}