async function delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}


async function createWhatapp(actorId, businessId, accessToken) {
    const rawJson = {
        input: {
            client_mutation_id: "3",
            actor_id: actorId,
            app_id: "719908864339208",
            log_session_id: "WBxP--1149220992-1213723823",
            business_id: businessId,
            api_account_type: "SELF",
            creation_source: "BUSINESS_MANAGER",
            friendly_name: "Textvn",
            timezone_id: 132,
            primary_funding_source: null,
            on_behalf_of_business_id: null,
            partner_business_id: businessId,
            page_id: null,
            product: "SELF",
            disable_automatic_sharing: null,
            obo_onboarding_info_input: null
        }
    };

    const encodedJson = encodeURIComponent(JSON.stringify(rawJson));
    const url = https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_req_friendly_name=useCreateWhatsAppBusinessAPIAccountM...Token};

    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        if (data?.data?.xfb_create_whatsapp_business_api_account?.whatsapp_business_account?.id) {
            return {
                success: true,
                id: data.data.xfb_create_whatsapp_business_api_account.whatsapp_business_account.id
            };
        } else {
            return {
                success: false,
                error: data
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

async function createMultiWhatapp(count, actorId, businessId, accessToken) {
    const idList = [];
    for (let i = 0; i < count; i++) {
        //console.log(🔄 Đang tạo tài khoản ${i + 1} ...);
        const result = await createWhatapp(actorId, businessId, accessToken);

        if (result.success) {
            idList.push(result.id);
            //console.log(✅ Tạo tài khoản ${i + 1} thành công > ${result.id});
        } else {
            //console.log(❌ Tạo tài khoản ${i + 1} lỗi);
            //console.log("📄 Response lỗi:", result.error);
        }

        const delay = 2000 + Math.floor(Math.random() * 1000); // 2–3 giây
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    //console.log("\n✅ Danh sách WhatsApp Business Account ID:");
    //console.log(idList.join('\n'));
	return idList;
}

//hàm lấy all id tkqc
async function getAllTkqc(businessId, accessToken) {
    const rawJson = {
		  "assetType": "AD_ACCOUNT",
		  "businessID": businessId
		};
const encodedJson = encodeURIComponent(JSON.stringify(rawJson));
    const url = https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_req_friendly_name=BizKitSettingsBusinessAssetGroupAddA...Token};

    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        if (data) {
            return {
                success: true,
                data: data
            };
        } else {
            return {
                success: false,
                error: data
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

//add all tkqc vào bm aset
async function addAllTkqc(businessId, bagID, ids, accessToken) {
    const rawJson = {
	  "businessID": businessId,
	  "bagID": bagID,
	  "assets": [
		{
		  "asset_ids": ids,
		  "asset_type": "AD_ACCOUNT"
		}
	  ],
	  "scopedUserOrRequestIDs": null,
	  "assetPermissions": null
	};

    const encodedJson = encodeURIComponent(JSON.stringify(rawJson));
    const url = https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_req_friendly_name=BizKitSettingsBusinessAssetGroupAddA...Token};

    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        if (data) {
            return {
                success: true,
                data: data
            };
        } else {
            return {
                success: false,
                error: data
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

//xóa whatapp
async function deleteWhatapp(actor_id, waba_id, accessToken) {
    const rawJson = {
	  "input": {
		"client_mutation_id": "23",
		"actor_id": actor_id,
		"waba_id": waba_id
	  }
	};

    const encodedJson = encodeURIComponent(JSON.stringify(rawJson));
    const url = https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_req_friendly_name=useDeleteWhatsAppBusinessAccountMuta...Token};

    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        if (data) {
            return {
                success: true,
                data: data
};
        } else {
            return {
                success: false,
                error: data
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

async function deleteAllWhatapp(actor_id, businessID, accessToken) {
    const rawJson = {
	  "businessID": businessID,
	  "assetTypes": [
		"WHATSAPP_BUSINESS_ACCOUNT"
	  ],
	  "searchTerm": null,
	  "orderBy": null,
	  "assetFilters": {
		"whatsapp_business_account_statuses": [
		  "ACTIVE"
		]
	  },
	  "globalFilters": {},
	  "shouldSkip": false,
	  "shouldCountAdmin": false,
	  "count": 16
	};

    const encodedJson = encodeURIComponent(JSON.stringify(rawJson));
    const url = https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_req_friendly_name=BizKitSettingsBusinessAssetsListCont...Token};

    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();
		const edges = data.data.business.connected_objects.edges;
		const assetIDs = edges.map(edge => edge.node.assetID);
		//console.log(assetIDs);
		for (const id of assetIDs) {
			const _deleteWhatapp = await deleteWhatapp(actor_id, id, accessToken);
			//console.log(_deleteWhatapp);
			if(_deleteWhatapp.success){
				//console.log(ID ${id} xóa ok);
			}
			else{
				//console.log(ID ${id} xóa lỗi);
			}
		}
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

async function swapIdTkqc(assetID, businessId, accessToken) {
    const rawJson = {
	  "assetID": assetID,
	  "businessID": businessId
	};

    const encodedJson = encodeURIComponent(JSON.stringify(rawJson));
    const url = https://graph.facebook.com/graphql?method=post&locale=en_US&pretty=false&format=json&fb_api_req_friendly_name=BizKitSettingsAssetStatusBannerQuery...Token};

    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        if (data?.data?.business_object_rendered_in_ui?.business_object_ui_id) {
            return {
                success: true,
                id: data.data.business_object_rendered_in_ui.business_object_ui_id
            };
        } else {
            return {
                success: false,
                error: data
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error
        };
    }
}

(async () => {
	const business_asset_groups = "idgroup"; // ID GR
const actor_id = "idvia"; // u ID
	const businessId = "idbm"; // ID BM
	const accessToken = "token"; // token
	const So_Vong_Lap = 1000;
	let sum = 0;
	for (let i = 0; i < So_Vong_Lap; i++) {
		try {
			//xóa hết whatapp ra khỏi bm
				//console.log("Xóa hết whatapp cũ khỏi bm ...");
				await deleteAllWhatapp(actor_id, businessId, accessToken);

			//tạo 5 whatapp
				//console.log("Đang tạo whatapp ...");
				const _createWhatapp = await createMultiWhatapp(5, actor_id, businessId, accessToken);

			//lấy ra 5 tkqc
				let _getAllTkqc = await getAllTkqc(businessId, accessToken);
				//console.log(_getAllTkqc);
				let edges = _getAllTkqc.data.data.business.connected_objects.edges;
				let idList = edges
								.filter(edge => edge.node.business_object_name.includes("Read-Only"))
								.map(edge => edge.node.business_object_id);
				//let idList = edges.map(edge => edge.node.business_object_id);
				//console.log(idList);
				
				while (idList.length < _createWhatapp.length) {
					//console.log("Chờ hiện đủ tkqc ...");
					await delay(5000);
					_getAllTkqc = await getAllTkqc(businessId, accessToken);
					edges = _getAllTkqc.data.data.business.connected_objects.edges;
					idList = edges
								.filter(edge => edge.node.business_object_name.includes("Read-Only"))
								.map(edge => edge.node.business_object_id);
					//console.log(idList);
				}
				//console.log(idList.join('\n'));
				
			//thêm tất cả tkqc group
				//console.log("Thêm tất cả tkqc vào group ...");
				const _addAllTkqc = await addAllTkqc(businessId,business_asset_groups, idList, accessToken);
				//console.log("Tổng số tkqc add vào group thành công: " + _addAllTkqc.data.data.business_settings_add_assets_and_users_to_business_asset_group.success_count);
				
			//chuyển đổi ID tkqc
				const idTkqcList = [];
				for (const id of idList) {
					const _swapIdTkqc = await swapIdTkqc(id, businessId, accessToken);
					//console.log(_swapIdTkqc);
					if(_swapIdTkqc.success){
						//console.log(_swapIdTkqc.id);
						idTkqcList.push(_swapIdTkqc.id);
					}
				}
				//console.log("========== Danh sách ID TKQC ==========");

				console.log(idTkqcList.join('\n'));
sum=sum+idTkqcList.length;
console.log([${i+1}/${So_Vong_Lap}] Đã tạo duoc ${sum} tài khoản ...);
				
			//xóa hết whatapp ra khỏi bm
				//console.log("Xóa hết whatapp mới khỏi bm ...");
				await deleteAllWhatapp(actor_id, businessId, accessToken);
		}
		catch{}
	}
})()
Đang hiển thị 5869703982869849316.
thầy thay id via id bm id group và token via vào nha