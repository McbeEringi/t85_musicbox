({
	bpm:131,// テンポ
	minNote:1/16,// 音符の最小単位
	// ループ_ポーズ (どちらも1にすると複数曲再生ができなくなる)
	lp:0b1_0,
	vwd:[// 音量半分_音色_減衰無効化
		0b0_1_1,
		0b0_1_0,
		0b0_1_0,
		0b0_1_1
	],
	notes:`
		&gt;1ar4a1brarFr2ar
		1ar4a1brarFr2ar
		1drdrdrer5F1rdr
		5F1rar8a
		1drdrdrer8F
		1drdrdrer8F
		1erererdr2erFrargrFrer,

		&lt;2r
		1a3r1a3r1aa2r1a3r1a3r1a3r1aa2r1a3r
		1b3r1b3r1bb2r1b3r1b3r1b3r1bb2r1b3r
		1b3r1b3r1bb2r1b3r1b3r1b3r1bb2r1b3r
		1a3r1a3r1aa2r1a3r1a3r1a3r1aa2ra,

		&lt;2r
		1F3r1F3r1FF2r1F3r1F3r1F3r1FF2r1F3r
		1F3r1F3r1FF2r1F3r1F3r1F3r1FF2r1F3r
		1g3r1g3r1gg2r1g3r1g3r1g3r1gg2r1g3r
		1e3r1e3r1ee2r1e3r1e3r1e3r1ee2re,

		&lt;4d&lt;a&gt;d&lt;a&gt;d&lt;a&gt;3d&lt;1a&gt;2dC&lt;
		4bFbFbF3b1F2ba
		4gdg&gt;d&lt;gd2gdgb
		4aeaeae&gt;2C&lt;b4a
	`
})