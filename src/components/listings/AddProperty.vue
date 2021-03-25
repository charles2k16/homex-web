<template>
  <div>
    <el-form
      label-position="top"
      label-width="100px"
      :model="propertyDetails"
      :rules="rules"
      ref="propertyDetails"
    >
      <el-tabs v-model="activeTab" class="mt-4 px-2" stretch type="card">
        <el-tab-pane name="property">
          <span slot="label"
            ><i class="el-icon-office-building"></i> Property Info</span
          >
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="Property Type" prop="property_type">
                <el-select v-model="propertyDetails.type" class="w-100">
                  <el-option
                    v-for="p in propertyTypes"
                    :key="p.id"
                    :label="p.type"
                    :value="p.type"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Name" prop="name">
                <el-input
                  v-model="propertyDetails.name"
                  placeholder="4 bedroom house"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="Choose Region" prop="region">
                <el-select v-model="propertyDetails.region" class="w-100">
                  <el-option
                    v-for="region in regions"
                    :key="region"
                    :label="region"
                    :value="region"
                  />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="Location" prop="location">
                <el-input
                  v-model="propertyDetails.location"
                  placeholder="Spintex"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10" v-show="!isLand">
            <el-col :span="12">
              <el-form-item label="Number of Garages">
                <el-input
                  style="width: 100%"
                  v-model="propertyDetails.garages"
                  placeholder="1"
                />
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="Toilet">
                <el-input
                  style="width: 100%"
                  v-model="propertyDetails.toilet"
                  placeholder="1"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10" v-show="!isLand">
            <el-col :span="12">
              <el-form-item label="Bedrooms" prop="no_bedrooms">
                <el-input
                  type="number"
                  v-model="propertyDetails.bedrooms"
                  placeholder="4"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Bathrooms" prop="no_bathrooms">
                <el-input
                  type="number"
                  v-model="propertyDetails.bathrooms"
                  placeholder="2"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="18" :lg="18" v-show="isLand">
              <el-form-item label="Acres">
                <el-input type="number" v-model="propertyDetails.size">
                  <template slot="append">acres</template>
                </el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="24" :md="18" :lg="18">
              <el-form-item label="Extra Information">
                <el-input
                  type="textarea"
                  placeholder="additional description on property mentioned by client"
                  v-model="propertyDetails.description"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <br />
          <div class="mt-3">
            <el-button
              class="w-100"
              type="primary"
              @click="handleContinue('budget')"
              >Continue</el-button
            >
          </div>
        </el-tab-pane>

        <!-- Budget Info -->
        <el-tab-pane name="budget">
          <span slot="label"><i class="el-icon-key"></i> Budget Info</span>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <el-form-item label="Price">
                <el-input v-model="propertyDetails.price" placeholder="00">
                  <template slot="prepend">GH₵</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddProperty',
  data() {
    return {
      propertyDetails: {
        name: '',
        type: '',
        region: '',
        location: '',
        bedrooms: '',
        garages: '',
        bathrooms: '',
        size: '',
        description: '',
      },
      propertyTypes: ['Land', 'House', 'Apartment', 'Town Houses'],
      activeTab: 'property',
    };
  },
  computed: {
    ...mapGetters({
      regions: 'getRegions',
    }),
    isLand() {
      return this.propertyDetails.type == 'Land';
    },
  },
  methods: {
    handleContinue(nextTab) {
      this.activeTab = nextTab;
    },
  },
};
</script>
