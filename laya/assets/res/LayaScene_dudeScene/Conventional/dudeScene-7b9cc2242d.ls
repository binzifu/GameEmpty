{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"dudeScene",
			"sky":{
				"material":{
					"type":"Laya.SkyProceduralMaterial",
					"path":"Assets/Sky.lmat"
				},
				"mesh":"SkyDome"
			},
			"ambientColor":[
				0.3970588,
				0.3970588,
				0.3970588
			],
			"reflectionIntensity":1,
			"lightmaps":[],
			"enableFog":true,
			"fogStart":1,
			"fogRange":2,
			"fogColor":[
				0.2642733,
				0.7206843,
				0.7647059
			]
		},
		"child":[
			{
				"type":"Sprite3D",
				"props":{
					"name":"dude1",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						-0.63
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
					]
				},
				"components":[
					{
						"type":"Animator",
						"avatar":{
							"path":"Assets/dude/dude1-dude1-dude1Avatar.lav",
							"linkSprites":{}
						},
						"layers":[
							{
								"name":"Base Layer",
								"weight":0,
								"blendingMode":0,
								"states":[
									{
										"name":"Take 001",
										"clipPath":"Assets/dude/dude1-Take 001.lani"
									}
								]
							}
						],
						"cullingMode":0,
						"playOnWake":true
					}
				],
				"child":[
					{
						"type":"SkinnedMeshSprite3D",
						"props":{
							"name":"him",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								0.01,
								0.01,
								0.01
							],
							"rootBone":"Root",
							"boundBox":{
								"min":[
									-28.70251,
									-20.1811,
									-43.31205
								],
								"max":[
									28.75009,
									19.26761,
									36.05674
								]
							},
							"boundSphere":{
								"center":[
									0.02379036,
									-0.4567451,
									-3.627659
								],
								"radius":52.81195
							},
							"materials":[
								{
									"path":"Assets/Materials/head.lmat"
								},
								{
									"path":"Assets/Materials/jacket.lmat"
								},
								{
									"path":"Assets/Materials/pants.lmat"
								},
								{
									"path":"Assets/Materials/upBodyC.lmat"
								},
								{
									"path":"Assets/Materials/upBodyC.lmat"
								}
							],
							"meshPath":"Assets/dude/dude1-him.lm"
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"DirectionLight",
				"props":{
					"name":"Directional light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.004191816,
						0.3383333,
						0.0225434
					],
					"rotation":[
						0.1093816,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1.5,
					"lightmapBakedType":0,
					"color":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Camera",
				"props":{
					"name":"Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0.81,
						-1.85
					],
					"rotation":[
						0,
						0.9914449,
						0.1305262,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"fieldOfView":60,
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
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Plane",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						1,
						0,
						0
					],
					"scale":[
						0.2,
						0.2,
						0.2
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/layabox.lmat"
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
				"props":{
					"name":"Cube",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0.4088883,
						0.067,
						0.726
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						0.1,
						0.1,
						0.1
					],
					"meshPath":"Library/unity default resources-Cube.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/layabox.lmat"
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
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Capsule",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.622,
						0.107,
						0.547
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						0.1,
						0.1,
						0.1
					],
					"meshPath":"Library/unity default resources-Capsule.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/layabox.lmat"
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
								"type":"CapsuleColliderShape",
								"center":[
									0,
									0,
									0
								],
								"radius":0.5,
								"height":2
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.5,
						0.1,
						-0.8
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						0.1,
						0.1,
						0.1
					],
					"meshPath":"Library/unity default resources-Cylinder.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/layabox.lmat"
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
								"type":"CapsuleColliderShape",
								"center":[
									0,
									0,
									0
								],
								"radius":0.5,
								"height":2
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Sphere",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0.5,
						0.05,
						-0.8
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						0.1,
						0.1,
						0.1
					],
					"meshPath":"Library/unity default resources-Sphere.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/layabox.lmat"
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
								"type":"SphereColliderShape",
								"center":[
									0,
									0,
									0
								],
								"radius":0.5
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