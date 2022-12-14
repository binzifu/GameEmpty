{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"moveclip",
			"ambientColor":[
				0,
				0,
				0
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/moveclipGIReflection.ltcb",
			"reflectionIntensity":0.2,
			"ambientMode":0,
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[
				{
					"constructParams":[
						1024,
						1024,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"path":"Assets/Scenes/moveclip/Lightmap-0_comp_light.png"
				},
				{
					"constructParams":[
						1024,
						1024,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"path":"Assets/Scenes/moveclip/Lightmap-1_comp_light.png"
				},
				{
					"constructParams":[
						1024,
						1024,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"path":"Assets/Scenes/moveclip/Lightmap-2_comp_light.png"
				},
				{
					"constructParams":[
						1024,
						1024,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"path":"Assets/Scenes/moveclip/Lightmap-3_comp_light.png"
				},
				{
					"constructParams":[
						1024,
						1024,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"path":"Assets/Scenes/moveclip/Lightmap-4_comp_light.png"
				},
				{
					"constructParams":[
						1024,
						1024,
						1,
						false
					],
					"propertyParams":{
						"filterMode":1,
						"wrapModeU":1,
						"wrapModeV":1,
						"anisoLevel":3
					},
					"path":"Assets/Scenes/moveclip/Lightmap-5_comp_light.png"
				}
			],
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
						-14.48346,
						9.85,
						35.29399
					],
					"rotation":[
						0.03159932,
						0.9426042,
						0.09338418,
						-0.3190269
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
					"enableHDR":true,
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
				"type":"Sprite3D",
				"instanceID":1,
				"props":{
					"name":"static",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						12.59,
						32.7,
						34.3
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
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"instanceID":2,
						"props":{
							"name":"Plane (1)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								-12.99,
								0,
								30.34
							],
							"rotation":[
								0.7071068,
								0,
								0,
								-0.7071068
							],
							"scale":[
								6.5,
								1,
								6.500004
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"lightmapIndex":0,
							"lightmapScaleOffset":[
								1,
								1,
								0,
								0
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/jacketS.lmat"
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
							"name":"Plane (2)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0.5,
								-0.5,
								-0.5,
								-0.5
							],
							"scale":[
								6.5,
								1,
								6.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"lightmapIndex":4,
							"lightmapScaleOffset":[
								1,
								1,
								0,
								0
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/jacketS.lmat"
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
						"instanceID":4,
						"props":{
							"name":"Plane (3)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								-44.59,
								0,
								0
							],
							"rotation":[
								-0.5,
								-0.5,
								0.5,
								-0.5
							],
							"scale":[
								6.5,
								1,
								6.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"lightmapIndex":3,
							"lightmapScaleOffset":[
								1,
								1,
								0,
								0
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/jacketS.lmat"
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
						"instanceID":5,
						"props":{
							"name":"floor",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-22.9,
								-30.7,
								-1.300003
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								5.974872,
								1.2719,
								8.012971
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/RPG_FPS_game_assets_industrial/Buildings/Industrial/Hangars/Hangar_v1/Source/Materials/Hangar_v1.lmat"
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
						"instanceID":6,
						"props":{
							"name":"Plane (4)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								-32.85,
								0,
								-19
							],
							"rotation":[
								-0.7070685,
								-0.007355688,
								0.007355688,
								-0.7070685
							],
							"scale":[
								6.5,
								1,
								6.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"lightmapIndex":2,
							"lightmapScaleOffset":[
								1,
								1,
								0,
								0
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/jacketS.lmat"
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
							"name":"Plane (5)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								-23.4,
								30.5,
								-2.17
							],
							"rotation":[
								-0.9995041,
								-0.01039791,
								-0.0003092145,
								0.02972314
							],
							"scale":[
								6.5,
								1,
								6.5
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"lightmapIndex":1,
							"lightmapScaleOffset":[
								1,
								1,
								0,
								0
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/jacketS.lmat"
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
			},
			{
				"type":"Sprite3D",
				"instanceID":8,
				"props":{
					"name":"racktangleVideo",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.3699999,
						10,
						64.14
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						4,
						4,
						4
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"instanceID":9,
						"props":{
							"name":"Cube (1)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								0,
								1.75,
								-0.08399963
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								3.727504,
								0.3614893,
								0.2109645
							],
							"meshPath":"Library/unity default resources-Cube.lm",
							"lightmapIndex":5,
							"lightmapScaleOffset":[
								0.4092777,
								0.4092777,
								0.4084963,
								-0.001659935
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/headS.lmat"
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
						"instanceID":10,
						"props":{
							"name":"Cube (2)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								0,
								-1.661,
								-0.08399963
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								3.773979,
								0.3614893,
								0.2109645
							],
							"meshPath":"Library/unity default resources-Cube.lm",
							"lightmapIndex":5,
							"lightmapScaleOffset":[
								0.4112454,
								0.4112454,
								-0.001667915,
								-0.001667915
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/headS.lmat"
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
						"instanceID":11,
						"props":{
							"name":"Cube (3)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								1.68,
								0.03,
								-0.08399963
							],
							"rotation":[
								0,
								0,
								0.7071068,
								-0.7071068
							],
							"scale":[
								3.11621,
								0.3614893,
								0.2302678
							],
							"meshPath":"Library/unity default resources-Cube.lm",
							"lightmapIndex":5,
							"lightmapScaleOffset":[
								0.3817302,
								0.3817302,
								-0.001548208,
								0.2672127
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/headS.lmat"
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
						"instanceID":12,
						"props":{
							"name":"Cube (4)",
							"active":true,
							"isStatic":true,
							"layer":0,
							"position":[
								-1.683,
								0.03,
								-0.084
							],
							"rotation":[
								0,
								0,
								0.7071068,
								-0.7071068
							],
							"scale":[
								3.028236,
								0.3614893,
								0.2109645
							],
							"meshPath":"Library/unity default resources-Cube.lm",
							"lightmapIndex":5,
							"lightmapScaleOffset":[
								0.3699241,
								0.3699241,
								-0.001500326,
								0.5168727
							],
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/dude/Materials/headS.lmat"
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
					}
				]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":13,
				"props":{
					"name":"reflectionPlan",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-10.31,
						1.9,
						33
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						5.241577,
						1.1158,
						7.029541
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/Effect_waibao/FX_tx/Materials/wnnn.lmat"
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
				"instanceID":14,
				"props":{
					"name":"moveclip",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.3699999,
						10,
						64.22
					],
					"rotation":[
						0,
						0.7071068,
						-0.7071068,
						0
					],
					"scale":[
						1.25696,
						1.256961,
						1.256961
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"receiveShadows":true,
					"castShadow":true,
					"materials":[
						{
							"path":"Assets/dude/Materials/pantsN.lmat"
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
				"type":"Sprite3D",
				"instanceID":15,
				"props":{
					"name":"Area Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-0.3699999,
						10.22,
						64.22
					],
					"rotation":[
						-1,
						0,
						0,
						0
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[]
			}
		]
	}
}