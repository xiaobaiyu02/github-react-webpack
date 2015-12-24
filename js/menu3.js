let { Component } = React;
let { render } = ReactDOM;
let Menus = [
	{
		"key": "Summary",
		"value": "概要",
		"is_group": false,
		"icon": "icon-jj-home",
		"url": "/summary"
	},
	{
		"key": "Resource",
		"value": "资源池",
		"icon": "icon-jj-cloud",
		"is_group": true,
		"sublist": [
			{
				"key": "Host",
				"value": "主机管理",
				"belong": "Resource",
				"url": "/resource/host",
				"sublist": [
					{
						"key": "Host",
						"value": "主机管理",
						"sublist": [
							{
								"key": "Host",
								"value": "主机管理",
								"sublist": [
									{
										"key": "Host",
										"value": "主机管理",
										"sublist": [
											{
												"key": "Host",
												"value": "主机管理",
												"sublist": [
													{
														"key": "Host",
														"value": "主机管理",
		"sublist": [
			{
				"key": "Host",
				"value": "主机管理",
		"sublist": [
			{
				"key": "Host",
				"value": "主机管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/host"
			},
			{
				"key": "Network",
				"value": "网络管理",
		"sublist": [
			{
				"key": "Host",
				"value": "主机管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/host"
			},
			{
				"key": "Network",
				"value": "网络管理",
		"sublist": [
			{
				"key": "Host",
				"value": "主机管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/host"
			},
			{
				"key": "Network",
				"value": "网络管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/network"
			},
			{
				"key": "Storage",
				"value": "存储管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/storage"
			}
		],
				"belong": "Resource",
				"url": "/resource/network"
			},
			{
				"key": "Storage",
				"value": "存储管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/storage"
			}
		],
				"belong": "Resource",
				"url": "/resource/network"
			},
			{
				"key": "Storage",
				"value": "存储管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/storage"
			}
		],
				"belong": "Resource",
				"url": "/resource/host"
			},
			{
				"key": "Network",
				"value": "网络管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/network"
			},
			{
				"key": "Storage",
				"value": "存储管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/storage"
			}
		],
														"belong": "Resource",
														"url": "/resource/host"
													},
													{
														"key": "Network",
														"value": "网络管理",
														"is_group": false,
														"belong": "Resource",
														"url": "/resource/network"
													},
													{
														"key": "Storage",
														"value": "存储管理",
														"is_group": false,
														"belong": "Resource",
														"url": "/resource/storage"
													}
												],
												"belong": "Resource",
												"url": "/resource/host"
											},
											{
												"key": "Network",
												"value": "网络管理",
												"is_group": false,
												"belong": "Resource",
												"url": "/resource/network"
											},
											{
												"key": "Storage",
												"value": "存储管理",
												"is_group": false,
												"belong": "Resource",
												"url": "/resource/storage"
											}
										],
										"belong": "Resource",
										"url": "/resource/host"
									},
									{
										"key": "Network",
										"value": "网络管理",
										"is_group": false,
										"belong": "Resource",
										"url": "/resource/network"
									},
									{
										"key": "Storage",
										"value": "存储管理",
										"is_group": false,
										"belong": "Resource",
										"url": "/resource/storage"
									}
								],
								"belong": "Resource",
								"url": "/resource/host"
							},
							{
								"key": "Network",
								"value": "网络管理",
								"is_group": false,
								"belong": "Resource",
								"url": "/resource/network"
							},
							{
								"key": "Storage",
								"value": "存储管理",
								"is_group": false,
								"belong": "Resource",
								"url": "/resource/storage"
							}
						],
						"belong": "Resource",
						"url": "/resource/host"
					},
					{
						"key": "Network",
						"value": "网络管理",
						"is_group": false,
						"belong": "Resource",
						"url": "/resource/network"
					},
					{
						"key": "Storage",
						"value": "存储管理",
						"is_group": false,
						"belong": "Resource",
						"url": "/resource/storage"
					}
				]
			},
			{
				"key": "Network",
				"value": "网络管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/network"
			},
			{
				"key": "Storage",
				"value": "存储管理",
				"is_group": false,
				"belong": "Resource",
				"url": "/resource/storage"
			}
		]
	},
	{
		"key": "Desktop",
		"value": "桌面",
		"is_group": true,
		"icon": "icon-jj-pc",
		"sublist": [
			{
				"key": "Teaching_desktop",
				"value": "教学桌面",
				"is_group": false,
				"belong": "Desktop",
				"url": "/desktop/scene"
			},
			{
				"key": "Personal_desktop",
				"value": "个人桌面",
				"is_group": false,
				"belong": "Desktop",
				"url": "/desktop/personal"
			}
		]
	},
	{
		"key": "Template",
		"value": "模板",
		"icon": "icon-jj-Template",
		"is_group": true,
		"sublist": [
			{
				"key": "Teaching_template",
				"value": "教学模板",
				"is_group": false,
				"belong": "Template",
				"url": "/template/teach"
			},
			{
				"key": "Personal_template",
				"value": "个人模板",
				"is_group": false,
				"belong": "Template",
				"url": "/template/personal"
			},
			{
				"key": "Hardware_template",
				"value": "硬件模板",
				"is_group": false,
				"belong": "Template",
				"url": "/template/hardware"
			}
		]
	},
	{
		"key": "Terminal",
		"value": "终端",
		"icon": "icon-jj-Terminal",
		"is_group": true,
		"sublist": [
			{
				"key": "Classroom",
				"value": "教室管理",
				"is_group": false,
				"belong": "Terminal",
				"url": "/terminal/schoolroom"
			},
			{
				"key": "Terminal_Manage",
				"value": "终端管理",
				"is_group": false,
				"belong": "Terminal",
				"url": "/terminal/client"
			}
		]
	},
	{
		"key": "User",
		"value": "用户",
		"icon": "icon-jj-men",
		"is_group": true,
		"sublist": [
			{
				"key": "Role_Manage",
				"value": "角色管理",
				"is_group": false,
				"belong": "User",
				"url": "/user/role"
			},
			{
				"key": "Administrator",
				"value": "管理用户",
				"is_group": false,
				"belong": "User",
				"url": "/user/admin"
			},
			{
				"key": "Common_user",
				"value": "普通用户",
				"is_group": false,
				"belong": "User",
				"url": "/user/common"
			},
			{
				"key": "Domain_user",
				"value": "域用户",
				"is_group": false,
				"belong": "User",
				"url": "/user/domain"
			}
		]
	},
	{
		"key": "Monitor",
		"value": "监控",
		"is_group": true,
		"icon": "icon-jj-Monitor",
		"sublist": [
			{
				"key": "Host_monitoring",
				"value": "主机监控",
				"is_group": false,
				"belong": "Monitor",
				"url": "/monitor/host"
			},
			{
				"key": "Desktop_monitoring",
				"value": "桌面监控",
				"is_group": false,
				"belong": "Monitor",
				"url": "/monitor/desktop"
			},
			{
				"key": "Alarm_information",
				"value": "告警信息",
				"is_group": false,
				"belong": "Monitor",
				"url": "/monitor/alarm"
			}
		]
	},
	{
		"key": "Timetable",
		"value": "排课",
		"is_group": true,
		"icon": "icon-jj-paike",
		"sublist": [
			{
				"key": "Course_list",
				"value": "课程列表",
				"is_group": false,
				"belong": "Timetable",
				"url": "/scheduler/view"
			}
		]
	},
	{
		"key": "System",
		"value": "系统",
		"is_group": true,
		"icon": "icon-jj-Setup",
		"sublist": [
			{
				"key": "System_backup",
				"value": "系统备份",
				"is_group": false,
				"belong": "System",
				"url": "/system/backup"
			},
			{
				"key": "System_ISO",
				"value": "系统 ISO",
				"is_group": false,
				"belong": "System",
				"url": "/system/iso"
			},
			{
				"key": "USB_redirection",
				"value": "USB 重定向",
				"is_group": false,
				"belong": "System",
				"url": "/system/usb"
			},
			{
				"key": "System_upgrade",
				"value": "系统升级",
				"is_group": false,
				"belong": "System",
				"url": "/system/upgrade"
			},
			{
				"key": "Operation_log",
				"value": "操作日志",
				"is_group": false,
				"belong": "System",
				"url": "/system/logs"
			}
		]
	},
	{
		"key": "About",
		"value": "关于",
		"icon": "icon-jj-about-1",
		"is_group": false,
		"url": "/about"
	}
];

console.log(Menus)

class MenuItem extends Component{
	constructor(...x){
		super(...x);
	}
	handleClick(e){
		if(e.target.dataset.open === this.props.open){
			this.props.onChangeOpen("");
		}
		else{
			this.props.onChangeOpen(e.target.dataset.open);
		}
	}
	render(){
		console.log(111111,this.props.children)
		return(
			<div>
				{
					this.props.menu.sublist ?
					<div>
						<a onClick={ this.handleClick.bind(this) } data-open={ this.props.menu.key }>{ this.props.menu.value+"+" }</a>
						{
							this.props.menu.key == this.props.open ?
							<MenuList menus={ this.props.menu.sublist } />:
							""
						}
					</div>:
					<a className="item">{ this.props.menu.value }</a>
				}
			</div>
		)
	}
}

class MenuList extends Component{
	constructor(...x){
		super(...x);
		this.state = { open: "Resource" }
	}
	handleChangeOpen(openName){
		this.setState({open: openName});
	}
	render(){
		return(
			<ul className="sublist">
				{
					this.props.menus.map( (item, key) =>
						<MenuItem key={ key }
								  menu={ item }
								  open={ this.state.open }
								  onChangeOpen= { this.handleChangeOpen.bind(this) }/>
					)
				}
			</ul>
		)
	}
}

render(
	<MenuList menus={ Menus } />,
	document.getElementById("menu")
)


