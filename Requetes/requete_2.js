db.affairesCommune.aggregate([
	{
		$project: {
		  	commune: 1,
		  	departement: 1,
			nb_affaires: {$size: "$affaires"}
		}
	},
	{
		$group: {
			_id: "$departement",
			count: {$sum: "$nb_affaires"}
		}
	}
])

