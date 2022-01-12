import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  sendEmailVerificationToken: Scalars['String'];
  createUser: Scalars['String'];
  createUserSession: UserSessionEvent;
  createAdminSession: UserSessionEvent;
  sendForgotPasswordEmail: Scalars['String'];
  resetUserLoginPassword: Scalars['String'];
  sendFinancialPasswordEmail: Scalars['String'];
  createOrUpdateMyFinancialPassword: Scalars['String'];
  createOrUpdateMyBitcoinWallet: Scalars['String'];
  updateMyProfile: Scalars['String'];
  createBitcoinDeposit: UserBitcoinDepositEvent;
  createMyPlan: Scalars['String'];
  createBitcoinWithdrawal: Scalars['String'];
  updateDailyIncome: Scalars['String'];
  createUserManualBalance: Scalars['String'];
  processUsersBitcoinWithdrawal: Scalars['String'];
  createUserBankDeposit: Scalars['String'];
  createTxidNotification: Scalars['String'];
  createBlockNotification: Scalars['String'];
};


export type MutationSendEmailVerificationTokenArgs = {
  indicator_id: Scalars['String'];
  full_name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  phone_number: Scalars['String'];
  username: Scalars['String'];
  email_verification_id: Scalars['String'];
};


export type MutationCreateUserSessionArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateAdminSessionArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSendForgotPasswordEmailArgs = {
  email: Scalars['String'];
};


export type MutationResetUserLoginPasswordArgs = {
  verification_code: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateOrUpdateMyFinancialPasswordArgs = {
  password: Scalars['String'];
  verification_code: Scalars['String'];
};


export type MutationCreateOrUpdateMyBitcoinWalletArgs = {
  financial_password: Scalars['String'];
  address: Scalars['String'];
};


export type MutationUpdateMyProfileArgs = {
  password?: Maybe<Scalars['String']>;
  financial_password: Scalars['String'];
  full_name: Scalars['String'];
  phone_number: Scalars['String'];
};


export type MutationCreateBitcoinDepositArgs = {
  usd_value: Scalars['Float'];
};


export type MutationCreateMyPlanArgs = {
  financial_password: Scalars['String'];
  plan_id: Scalars['String'];
};


export type MutationCreateBitcoinWithdrawalArgs = {
  financial_password: Scalars['String'];
  usd_value: Scalars['Float'];
};


export type MutationUpdateDailyIncomeArgs = {
  value: Scalars['String'];
  income_id: Scalars['String'];
};


export type MutationCreateUserManualBalanceArgs = {
  financial_password: Scalars['String'];
  usd_value: Scalars['Float'];
  target_user_id: Scalars['String'];
};


export type MutationProcessUsersBitcoinWithdrawalArgs = {
  financial_password: Scalars['String'];
  ids: Scalars['String'];
};


export type MutationCreateUserBankDepositArgs = {
  financial_password: Scalars['String'];
  usd_cents: Scalars['Float'];
  comprovant: Scalars['Upload'];
};


export type MutationCreateTxidNotificationArgs = {
  txid: Scalars['String'];
};


export type MutationCreateBlockNotificationArgs = {
  block_hash: Scalars['String'];
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['String'];
  usd_cents: Scalars['Float'];
  name: Scalars['String'];
  formatted_usd_value: Scalars['String'];
};

export type PlanDailyIncome = {
  __typename?: 'PlanDailyIncome';
  id: Scalars['String'];
  year: Scalars['Float'];
  month: Scalars['Float'];
  day: Scalars['Float'];
  value: Scalars['String'];
  date_formatted: Scalars['String'];
  applied: Scalars['Boolean'];
  accumulated: Scalars['Float'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getValidIndicatorByUsername: User;
  getMe: User;
  getMyIndicationLink: Scalars['String'];
  getHasFinancialPassword: Scalars['Boolean'];
  getMyBalanceCard: UserBalance;
  getPlans: Array<Plan>;
  getIncomeChart: Scalars['String'];
  getMyProgressChart: Scalars['String'];
  getMyGainsChart: Scalars['String'];
  getHasBitcoinWallet: Scalars['Boolean'];
  getIsWithdrawalOpen: Scalars['Boolean'];
  getMyBitcoinWallet: Scalars['String'];
  getMyWithdrawalStatment: Array<UserBitcoinWithdrawal>;
  getMyStatment: Array<Transfer>;
  getMonthlyIncomes: Array<PlanDailyIncome>;
  getUsersPendingWithdrawals: Array<UserBitcoinWithdrawal>;
  getUsersSelectOptions: Array<UsersSelectOptions>;
  getMonthlyManualBalances: Array<Transfer>;
  getCardBalanceSum: Scalars['String'];
  getMonthlyProcessedWithdrawals: Array<UserBitcoinWithdrawal>;
  getUnilevelByUserId: Array<UnilevelNode>;
  hello: Scalars['String'];
};


export type QueryGetValidIndicatorByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryGetMyBalanceCardArgs = {
  card: Scalars['String'];
};


export type QueryGetMyGainsChartArgs = {
  year: Scalars['Float'];
  month: Scalars['Float'];
};


export type QueryGetMyWithdrawalStatmentArgs = {
  year: Scalars['Float'];
  month: Scalars['Float'];
};


export type QueryGetMyStatmentArgs = {
  card: Scalars['String'];
  year: Scalars['Float'];
  month: Scalars['Float'];
};


export type QueryGetMonthlyIncomesArgs = {
  year: Scalars['Float'];
  month: Scalars['Float'];
};


export type QueryGetMonthlyManualBalancesArgs = {
  year: Scalars['Float'];
  month: Scalars['Float'];
};


export type QueryGetCardBalanceSumArgs = {
  card: Scalars['String'];
};


export type QueryGetMonthlyProcessedWithdrawalsArgs = {
  year: Scalars['Float'];
  month: Scalars['Float'];
};


export type QueryGetUnilevelByUserIdArgs = {
  user_id?: Maybe<Scalars['String']>;
};

export type Transfer = {
  __typename?: 'Transfer';
  id: Scalars['String'];
  user: User;
  card: Scalars['String'];
  usd_cents: Scalars['Float'];
  description: Scalars['String'];
  created_at: Scalars['DateTime'];
  formatted_usd_value: Scalars['String'];
  formatted_date: Scalars['String'];
  color: Scalars['String'];
};

export type UnilevelNode = {
  __typename?: 'UnilevelNode';
  user_id: Scalars['String'];
  indicator_id: Scalars['String'];
  user: User;
  created_at: Scalars['DateTime'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  full_name: Scalars['String'];
  username: Scalars['String'];
  phone_number: Scalars['String'];
  email: Scalars['String'];
  avatar_url: Scalars['String'];
};

export type UserBalance = {
  __typename?: 'UserBalance';
  id: Scalars['String'];
  card: Scalars['String'];
  usd_cents: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  formatted_usd_value: Scalars['String'];
};

export type UserBitcoinDepositEvent = {
  __typename?: 'UserBitcoinDepositEvent';
  address: Scalars['String'];
  usd_cents: Scalars['Float'];
  btc_usd_conversion: Scalars['Float'];
  created_at: Scalars['DateTime'];
  formatted_usd_value: Scalars['String'];
  formatted_btc_usd_conversion: Scalars['String'];
  formatted_btc_amount: Scalars['String'];
};

export type UserBitcoinWithdrawal = {
  __typename?: 'UserBitcoinWithdrawal';
  id: Scalars['String'];
  user: User;
  address: Scalars['String'];
  usd_cents: Scalars['Float'];
  satoshis: Scalars['Float'];
  btc_usd_conversion: Scalars['Float'];
  txid?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  formatted_usd_value: Scalars['String'];
  formatted_btc_usd_conversion: Scalars['String'];
  formatted_btc_amount: Scalars['String'];
  txid_link: Scalars['String'];
  formatted_date: Scalars['String'];
};

export type UserSessionEvent = {
  __typename?: 'UserSessionEvent';
  token: Scalars['String'];
  created_at: Scalars['DateTime'];
};

export type UsersSelectOptions = {
  __typename?: 'UsersSelectOptions';
  value: Scalars['String'];
  label: Scalars['String'];
};

export type CreateBitcoinDepositMutationVariables = Exact<{
  usd_value: Scalars['Float'];
}>;


export type CreateBitcoinDepositMutation = (
  { __typename?: 'Mutation' }
  & { createBitcoinDeposit: (
    { __typename?: 'UserBitcoinDepositEvent' }
    & Pick<UserBitcoinDepositEvent, 'address' | 'usd_cents' | 'formatted_usd_value' | 'formatted_btc_amount' | 'btc_usd_conversion' | 'formatted_btc_usd_conversion' | 'created_at'>
  ) }
);

export type CreateBitcoinWithdrawalMutationVariables = Exact<{
  usd_value: Scalars['Float'];
  financial_password: Scalars['String'];
}>;


export type CreateBitcoinWithdrawalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createBitcoinWithdrawal'>
);

export type CreateMyPlanMutationVariables = Exact<{
  financial_password: Scalars['String'];
  plan_id: Scalars['String'];
}>;


export type CreateMyPlanMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createMyPlan'>
);

export type CreateOrUpdateMyBitcoinWalletMutationVariables = Exact<{
  financial_password: Scalars['String'];
  address: Scalars['String'];
}>;


export type CreateOrUpdateMyBitcoinWalletMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createOrUpdateMyBitcoinWallet'>
);

export type CreateOrUpdateMyFinancialPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  verification_code: Scalars['String'];
}>;


export type CreateOrUpdateMyFinancialPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createOrUpdateMyFinancialPassword'>
);

export type CreateUserMutationVariables = Exact<{
  email_verification_id: Scalars['String'];
  username: Scalars['String'];
  phone_number: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createUser'>
);

export type CreateUserBankDepositMutationVariables = Exact<{
  usd_cents: Scalars['Float'];
  financial_password: Scalars['String'];
  comprovant: Scalars['Upload'];
}>;


export type CreateUserBankDepositMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createUserBankDeposit'>
);

export type CreateUserSessionMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type CreateUserSessionMutation = (
  { __typename?: 'Mutation' }
  & { createUserSession: (
    { __typename?: 'UserSessionEvent' }
    & Pick<UserSessionEvent, 'token'>
  ) }
);

export type ResetUserLoginPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  verification_code: Scalars['String'];
}>;


export type ResetUserLoginPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetUserLoginPassword'>
);

export type SendEmailVerificationTokenMutationVariables = Exact<{
  email: Scalars['String'];
  full_name: Scalars['String'];
  indicator_id: Scalars['String'];
}>;


export type SendEmailVerificationTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendEmailVerificationToken'>
);

export type SendFinancialPasswordEmailMutationVariables = Exact<{ [key: string]: never; }>;


export type SendFinancialPasswordEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendFinancialPasswordEmail'>
);

export type SendForgotPasswordEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendForgotPasswordEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendForgotPasswordEmail'>
);

export type UpdateMyProfileMutationVariables = Exact<{
  phone_number: Scalars['String'];
  full_name: Scalars['String'];
  financial_password: Scalars['String'];
  password?: Maybe<Scalars['String']>;
}>;


export type UpdateMyProfileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateMyProfile'>
);

export type GetHasBitcoinWalletQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHasBitcoinWalletQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getHasBitcoinWallet'>
);

export type GetHasFinancialPasswordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHasFinancialPasswordQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getHasFinancialPassword'>
);

export type GetIncomeChartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIncomeChartQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getIncomeChart'>
);

export type GetIsWithdrawalOpenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIsWithdrawalOpenQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getIsWithdrawalOpen'>
);

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { getMe: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'full_name' | 'username' | 'email' | 'phone_number' | 'avatar_url'>
  ) }
);

export type GetMyBalanceCardQueryVariables = Exact<{
  card: Scalars['String'];
}>;


export type GetMyBalanceCardQuery = (
  { __typename?: 'Query' }
  & { getMyBalanceCard: (
    { __typename?: 'UserBalance' }
    & Pick<UserBalance, 'id' | 'usd_cents' | 'card' | 'formatted_usd_value'>
  ) }
);

export type GetMyBitcoinWalletQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBitcoinWalletQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getMyBitcoinWallet'>
);

export type GetMyGainsChartQueryVariables = Exact<{
  month: Scalars['Float'];
  year: Scalars['Float'];
}>;


export type GetMyGainsChartQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getMyGainsChart'>
);

export type GetMyIndicationLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyIndicationLinkQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getMyIndicationLink'>
);

export type GetMyProgressChartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProgressChartQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getMyProgressChart'>
);

export type GetMyStatmentQueryVariables = Exact<{
  month: Scalars['Float'];
  year: Scalars['Float'];
  card: Scalars['String'];
}>;


export type GetMyStatmentQuery = (
  { __typename?: 'Query' }
  & { getMyStatment: Array<(
    { __typename?: 'Transfer' }
    & Pick<Transfer, 'id' | 'description' | 'formatted_usd_value' | 'formatted_date' | 'color'>
  )> }
);

export type GetMyWithdrawalStatmentQueryVariables = Exact<{
  month: Scalars['Float'];
  year: Scalars['Float'];
}>;


export type GetMyWithdrawalStatmentQuery = (
  { __typename?: 'Query' }
  & { getMyWithdrawalStatment: Array<(
    { __typename?: 'UserBitcoinWithdrawal' }
    & Pick<UserBitcoinWithdrawal, 'id' | 'address' | 'txid' | 'formatted_usd_value' | 'formatted_btc_usd_conversion' | 'formatted_btc_amount' | 'txid_link' | 'formatted_date'>
  )> }
);

export type GetPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansQuery = (
  { __typename?: 'Query' }
  & { getPlans: Array<(
    { __typename?: 'Plan' }
    & Pick<Plan, 'id' | 'name' | 'usd_cents' | 'formatted_usd_value'>
  )> }
);

export type GetUnilevelByUserIdQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUnilevelByUserIdQuery = (
  { __typename?: 'Query' }
  & { getUnilevelByUserId: Array<(
    { __typename?: 'UnilevelNode' }
    & Pick<UnilevelNode, 'user_id' | 'indicator_id'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'full_name' | 'email' | 'phone_number'>
    ) }
  )> }
);

export type GetValidIndicatorByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetValidIndicatorByUsernameQuery = (
  { __typename?: 'Query' }
  & { getValidIndicatorByUsername: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'full_name'>
  ) }
);


export const CreateBitcoinDepositDocument = gql`
    mutation createBitcoinDeposit($usd_value: Float!) {
  createBitcoinDeposit(usd_value: $usd_value) {
    address
    usd_cents
    formatted_usd_value
    formatted_btc_amount
    btc_usd_conversion
    formatted_btc_usd_conversion
    created_at
  }
}
    `;
export type CreateBitcoinDepositMutationFn = Apollo.MutationFunction<CreateBitcoinDepositMutation, CreateBitcoinDepositMutationVariables>;

/**
 * __useCreateBitcoinDepositMutation__
 *
 * To run a mutation, you first call `useCreateBitcoinDepositMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBitcoinDepositMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBitcoinDepositMutation, { data, loading, error }] = useCreateBitcoinDepositMutation({
 *   variables: {
 *      usd_value: // value for 'usd_value'
 *   },
 * });
 */
export function useCreateBitcoinDepositMutation(baseOptions?: Apollo.MutationHookOptions<CreateBitcoinDepositMutation, CreateBitcoinDepositMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBitcoinDepositMutation, CreateBitcoinDepositMutationVariables>(CreateBitcoinDepositDocument, options);
      }
export type CreateBitcoinDepositMutationHookResult = ReturnType<typeof useCreateBitcoinDepositMutation>;
export type CreateBitcoinDepositMutationResult = Apollo.MutationResult<CreateBitcoinDepositMutation>;
export type CreateBitcoinDepositMutationOptions = Apollo.BaseMutationOptions<CreateBitcoinDepositMutation, CreateBitcoinDepositMutationVariables>;
export const CreateBitcoinWithdrawalDocument = gql`
    mutation createBitcoinWithdrawal($usd_value: Float!, $financial_password: String!) {
  createBitcoinWithdrawal(
    usd_value: $usd_value
    financial_password: $financial_password
  )
}
    `;
export type CreateBitcoinWithdrawalMutationFn = Apollo.MutationFunction<CreateBitcoinWithdrawalMutation, CreateBitcoinWithdrawalMutationVariables>;

/**
 * __useCreateBitcoinWithdrawalMutation__
 *
 * To run a mutation, you first call `useCreateBitcoinWithdrawalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBitcoinWithdrawalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBitcoinWithdrawalMutation, { data, loading, error }] = useCreateBitcoinWithdrawalMutation({
 *   variables: {
 *      usd_value: // value for 'usd_value'
 *      financial_password: // value for 'financial_password'
 *   },
 * });
 */
export function useCreateBitcoinWithdrawalMutation(baseOptions?: Apollo.MutationHookOptions<CreateBitcoinWithdrawalMutation, CreateBitcoinWithdrawalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBitcoinWithdrawalMutation, CreateBitcoinWithdrawalMutationVariables>(CreateBitcoinWithdrawalDocument, options);
      }
export type CreateBitcoinWithdrawalMutationHookResult = ReturnType<typeof useCreateBitcoinWithdrawalMutation>;
export type CreateBitcoinWithdrawalMutationResult = Apollo.MutationResult<CreateBitcoinWithdrawalMutation>;
export type CreateBitcoinWithdrawalMutationOptions = Apollo.BaseMutationOptions<CreateBitcoinWithdrawalMutation, CreateBitcoinWithdrawalMutationVariables>;
export const CreateMyPlanDocument = gql`
    mutation createMyPlan($financial_password: String!, $plan_id: String!) {
  createMyPlan(financial_password: $financial_password, plan_id: $plan_id)
}
    `;
export type CreateMyPlanMutationFn = Apollo.MutationFunction<CreateMyPlanMutation, CreateMyPlanMutationVariables>;

/**
 * __useCreateMyPlanMutation__
 *
 * To run a mutation, you first call `useCreateMyPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMyPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMyPlanMutation, { data, loading, error }] = useCreateMyPlanMutation({
 *   variables: {
 *      financial_password: // value for 'financial_password'
 *      plan_id: // value for 'plan_id'
 *   },
 * });
 */
export function useCreateMyPlanMutation(baseOptions?: Apollo.MutationHookOptions<CreateMyPlanMutation, CreateMyPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMyPlanMutation, CreateMyPlanMutationVariables>(CreateMyPlanDocument, options);
      }
export type CreateMyPlanMutationHookResult = ReturnType<typeof useCreateMyPlanMutation>;
export type CreateMyPlanMutationResult = Apollo.MutationResult<CreateMyPlanMutation>;
export type CreateMyPlanMutationOptions = Apollo.BaseMutationOptions<CreateMyPlanMutation, CreateMyPlanMutationVariables>;
export const CreateOrUpdateMyBitcoinWalletDocument = gql`
    mutation createOrUpdateMyBitcoinWallet($financial_password: String!, $address: String!) {
  createOrUpdateMyBitcoinWallet(
    financial_password: $financial_password
    address: $address
  )
}
    `;
export type CreateOrUpdateMyBitcoinWalletMutationFn = Apollo.MutationFunction<CreateOrUpdateMyBitcoinWalletMutation, CreateOrUpdateMyBitcoinWalletMutationVariables>;

/**
 * __useCreateOrUpdateMyBitcoinWalletMutation__
 *
 * To run a mutation, you first call `useCreateOrUpdateMyBitcoinWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrUpdateMyBitcoinWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrUpdateMyBitcoinWalletMutation, { data, loading, error }] = useCreateOrUpdateMyBitcoinWalletMutation({
 *   variables: {
 *      financial_password: // value for 'financial_password'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCreateOrUpdateMyBitcoinWalletMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrUpdateMyBitcoinWalletMutation, CreateOrUpdateMyBitcoinWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrUpdateMyBitcoinWalletMutation, CreateOrUpdateMyBitcoinWalletMutationVariables>(CreateOrUpdateMyBitcoinWalletDocument, options);
      }
export type CreateOrUpdateMyBitcoinWalletMutationHookResult = ReturnType<typeof useCreateOrUpdateMyBitcoinWalletMutation>;
export type CreateOrUpdateMyBitcoinWalletMutationResult = Apollo.MutationResult<CreateOrUpdateMyBitcoinWalletMutation>;
export type CreateOrUpdateMyBitcoinWalletMutationOptions = Apollo.BaseMutationOptions<CreateOrUpdateMyBitcoinWalletMutation, CreateOrUpdateMyBitcoinWalletMutationVariables>;
export const CreateOrUpdateMyFinancialPasswordDocument = gql`
    mutation createOrUpdateMyFinancialPassword($password: String!, $verification_code: String!) {
  createOrUpdateMyFinancialPassword(
    password: $password
    verification_code: $verification_code
  )
}
    `;
export type CreateOrUpdateMyFinancialPasswordMutationFn = Apollo.MutationFunction<CreateOrUpdateMyFinancialPasswordMutation, CreateOrUpdateMyFinancialPasswordMutationVariables>;

/**
 * __useCreateOrUpdateMyFinancialPasswordMutation__
 *
 * To run a mutation, you first call `useCreateOrUpdateMyFinancialPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrUpdateMyFinancialPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrUpdateMyFinancialPasswordMutation, { data, loading, error }] = useCreateOrUpdateMyFinancialPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      verification_code: // value for 'verification_code'
 *   },
 * });
 */
export function useCreateOrUpdateMyFinancialPasswordMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrUpdateMyFinancialPasswordMutation, CreateOrUpdateMyFinancialPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrUpdateMyFinancialPasswordMutation, CreateOrUpdateMyFinancialPasswordMutationVariables>(CreateOrUpdateMyFinancialPasswordDocument, options);
      }
export type CreateOrUpdateMyFinancialPasswordMutationHookResult = ReturnType<typeof useCreateOrUpdateMyFinancialPasswordMutation>;
export type CreateOrUpdateMyFinancialPasswordMutationResult = Apollo.MutationResult<CreateOrUpdateMyFinancialPasswordMutation>;
export type CreateOrUpdateMyFinancialPasswordMutationOptions = Apollo.BaseMutationOptions<CreateOrUpdateMyFinancialPasswordMutation, CreateOrUpdateMyFinancialPasswordMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($email_verification_id: String!, $username: String!, $phone_number: String!, $password: String!) {
  createUser(
    email_verification_id: $email_verification_id
    username: $username
    phone_number: $phone_number
    password: $password
  )
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email_verification_id: // value for 'email_verification_id'
 *      username: // value for 'username'
 *      phone_number: // value for 'phone_number'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateUserBankDepositDocument = gql`
    mutation createUserBankDeposit($usd_cents: Float!, $financial_password: String!, $comprovant: Upload!) {
  createUserBankDeposit(
    usd_cents: $usd_cents
    financial_password: $financial_password
    comprovant: $comprovant
  )
}
    `;
export type CreateUserBankDepositMutationFn = Apollo.MutationFunction<CreateUserBankDepositMutation, CreateUserBankDepositMutationVariables>;

/**
 * __useCreateUserBankDepositMutation__
 *
 * To run a mutation, you first call `useCreateUserBankDepositMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserBankDepositMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserBankDepositMutation, { data, loading, error }] = useCreateUserBankDepositMutation({
 *   variables: {
 *      usd_cents: // value for 'usd_cents'
 *      financial_password: // value for 'financial_password'
 *      comprovant: // value for 'comprovant'
 *   },
 * });
 */
export function useCreateUserBankDepositMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserBankDepositMutation, CreateUserBankDepositMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserBankDepositMutation, CreateUserBankDepositMutationVariables>(CreateUserBankDepositDocument, options);
      }
export type CreateUserBankDepositMutationHookResult = ReturnType<typeof useCreateUserBankDepositMutation>;
export type CreateUserBankDepositMutationResult = Apollo.MutationResult<CreateUserBankDepositMutation>;
export type CreateUserBankDepositMutationOptions = Apollo.BaseMutationOptions<CreateUserBankDepositMutation, CreateUserBankDepositMutationVariables>;
export const CreateUserSessionDocument = gql`
    mutation createUserSession($password: String!, $username: String!) {
  createUserSession(password: $password, username: $username) {
    token
  }
}
    `;
export type CreateUserSessionMutationFn = Apollo.MutationFunction<CreateUserSessionMutation, CreateUserSessionMutationVariables>;

/**
 * __useCreateUserSessionMutation__
 *
 * To run a mutation, you first call `useCreateUserSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserSessionMutation, { data, loading, error }] = useCreateUserSessionMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUserSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserSessionMutation, CreateUserSessionMutationVariables>(CreateUserSessionDocument, options);
      }
export type CreateUserSessionMutationHookResult = ReturnType<typeof useCreateUserSessionMutation>;
export type CreateUserSessionMutationResult = Apollo.MutationResult<CreateUserSessionMutation>;
export type CreateUserSessionMutationOptions = Apollo.BaseMutationOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>;
export const ResetUserLoginPasswordDocument = gql`
    mutation resetUserLoginPassword($password: String!, $verification_code: String!) {
  resetUserLoginPassword(
    password: $password
    verification_code: $verification_code
  )
}
    `;
export type ResetUserLoginPasswordMutationFn = Apollo.MutationFunction<ResetUserLoginPasswordMutation, ResetUserLoginPasswordMutationVariables>;

/**
 * __useResetUserLoginPasswordMutation__
 *
 * To run a mutation, you first call `useResetUserLoginPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetUserLoginPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetUserLoginPasswordMutation, { data, loading, error }] = useResetUserLoginPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      verification_code: // value for 'verification_code'
 *   },
 * });
 */
export function useResetUserLoginPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetUserLoginPasswordMutation, ResetUserLoginPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetUserLoginPasswordMutation, ResetUserLoginPasswordMutationVariables>(ResetUserLoginPasswordDocument, options);
      }
export type ResetUserLoginPasswordMutationHookResult = ReturnType<typeof useResetUserLoginPasswordMutation>;
export type ResetUserLoginPasswordMutationResult = Apollo.MutationResult<ResetUserLoginPasswordMutation>;
export type ResetUserLoginPasswordMutationOptions = Apollo.BaseMutationOptions<ResetUserLoginPasswordMutation, ResetUserLoginPasswordMutationVariables>;
export const SendEmailVerificationTokenDocument = gql`
    mutation sendEmailVerificationToken($email: String!, $full_name: String!, $indicator_id: String!) {
  sendEmailVerificationToken(
    email: $email
    full_name: $full_name
    indicator_id: $indicator_id
  )
}
    `;
export type SendEmailVerificationTokenMutationFn = Apollo.MutationFunction<SendEmailVerificationTokenMutation, SendEmailVerificationTokenMutationVariables>;

/**
 * __useSendEmailVerificationTokenMutation__
 *
 * To run a mutation, you first call `useSendEmailVerificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailVerificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailVerificationTokenMutation, { data, loading, error }] = useSendEmailVerificationTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *      full_name: // value for 'full_name'
 *      indicator_id: // value for 'indicator_id'
 *   },
 * });
 */
export function useSendEmailVerificationTokenMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailVerificationTokenMutation, SendEmailVerificationTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailVerificationTokenMutation, SendEmailVerificationTokenMutationVariables>(SendEmailVerificationTokenDocument, options);
      }
export type SendEmailVerificationTokenMutationHookResult = ReturnType<typeof useSendEmailVerificationTokenMutation>;
export type SendEmailVerificationTokenMutationResult = Apollo.MutationResult<SendEmailVerificationTokenMutation>;
export type SendEmailVerificationTokenMutationOptions = Apollo.BaseMutationOptions<SendEmailVerificationTokenMutation, SendEmailVerificationTokenMutationVariables>;
export const SendFinancialPasswordEmailDocument = gql`
    mutation sendFinancialPasswordEmail {
  sendFinancialPasswordEmail
}
    `;
export type SendFinancialPasswordEmailMutationFn = Apollo.MutationFunction<SendFinancialPasswordEmailMutation, SendFinancialPasswordEmailMutationVariables>;

/**
 * __useSendFinancialPasswordEmailMutation__
 *
 * To run a mutation, you first call `useSendFinancialPasswordEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendFinancialPasswordEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendFinancialPasswordEmailMutation, { data, loading, error }] = useSendFinancialPasswordEmailMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendFinancialPasswordEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendFinancialPasswordEmailMutation, SendFinancialPasswordEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendFinancialPasswordEmailMutation, SendFinancialPasswordEmailMutationVariables>(SendFinancialPasswordEmailDocument, options);
      }
export type SendFinancialPasswordEmailMutationHookResult = ReturnType<typeof useSendFinancialPasswordEmailMutation>;
export type SendFinancialPasswordEmailMutationResult = Apollo.MutationResult<SendFinancialPasswordEmailMutation>;
export type SendFinancialPasswordEmailMutationOptions = Apollo.BaseMutationOptions<SendFinancialPasswordEmailMutation, SendFinancialPasswordEmailMutationVariables>;
export const SendForgotPasswordEmailDocument = gql`
    mutation sendForgotPasswordEmail($email: String!) {
  sendForgotPasswordEmail(email: $email)
}
    `;
export type SendForgotPasswordEmailMutationFn = Apollo.MutationFunction<SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>;

/**
 * __useSendForgotPasswordEmailMutation__
 *
 * To run a mutation, you first call `useSendForgotPasswordEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendForgotPasswordEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendForgotPasswordEmailMutation, { data, loading, error }] = useSendForgotPasswordEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendForgotPasswordEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>(SendForgotPasswordEmailDocument, options);
      }
export type SendForgotPasswordEmailMutationHookResult = ReturnType<typeof useSendForgotPasswordEmailMutation>;
export type SendForgotPasswordEmailMutationResult = Apollo.MutationResult<SendForgotPasswordEmailMutation>;
export type SendForgotPasswordEmailMutationOptions = Apollo.BaseMutationOptions<SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>;
export const UpdateMyProfileDocument = gql`
    mutation updateMyProfile($phone_number: String!, $full_name: String!, $financial_password: String!, $password: String) {
  updateMyProfile(
    phone_number: $phone_number
    full_name: $full_name
    financial_password: $financial_password
    password: $password
  )
}
    `;
export type UpdateMyProfileMutationFn = Apollo.MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      phone_number: // value for 'phone_number'
 *      full_name: // value for 'full_name'
 *      financial_password: // value for 'financial_password'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>(UpdateMyProfileDocument, options);
      }
export type UpdateMyProfileMutationHookResult = ReturnType<typeof useUpdateMyProfileMutation>;
export type UpdateMyProfileMutationResult = Apollo.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;
export const GetHasBitcoinWalletDocument = gql`
    query getHasBitcoinWallet {
  getHasBitcoinWallet
}
    `;

/**
 * __useGetHasBitcoinWalletQuery__
 *
 * To run a query within a React component, call `useGetHasBitcoinWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHasBitcoinWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHasBitcoinWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHasBitcoinWalletQuery(baseOptions?: Apollo.QueryHookOptions<GetHasBitcoinWalletQuery, GetHasBitcoinWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHasBitcoinWalletQuery, GetHasBitcoinWalletQueryVariables>(GetHasBitcoinWalletDocument, options);
      }
export function useGetHasBitcoinWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHasBitcoinWalletQuery, GetHasBitcoinWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHasBitcoinWalletQuery, GetHasBitcoinWalletQueryVariables>(GetHasBitcoinWalletDocument, options);
        }
export type GetHasBitcoinWalletQueryHookResult = ReturnType<typeof useGetHasBitcoinWalletQuery>;
export type GetHasBitcoinWalletLazyQueryHookResult = ReturnType<typeof useGetHasBitcoinWalletLazyQuery>;
export type GetHasBitcoinWalletQueryResult = Apollo.QueryResult<GetHasBitcoinWalletQuery, GetHasBitcoinWalletQueryVariables>;
export const GetHasFinancialPasswordDocument = gql`
    query getHasFinancialPassword {
  getHasFinancialPassword
}
    `;

/**
 * __useGetHasFinancialPasswordQuery__
 *
 * To run a query within a React component, call `useGetHasFinancialPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHasFinancialPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHasFinancialPasswordQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHasFinancialPasswordQuery(baseOptions?: Apollo.QueryHookOptions<GetHasFinancialPasswordQuery, GetHasFinancialPasswordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHasFinancialPasswordQuery, GetHasFinancialPasswordQueryVariables>(GetHasFinancialPasswordDocument, options);
      }
export function useGetHasFinancialPasswordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHasFinancialPasswordQuery, GetHasFinancialPasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHasFinancialPasswordQuery, GetHasFinancialPasswordQueryVariables>(GetHasFinancialPasswordDocument, options);
        }
export type GetHasFinancialPasswordQueryHookResult = ReturnType<typeof useGetHasFinancialPasswordQuery>;
export type GetHasFinancialPasswordLazyQueryHookResult = ReturnType<typeof useGetHasFinancialPasswordLazyQuery>;
export type GetHasFinancialPasswordQueryResult = Apollo.QueryResult<GetHasFinancialPasswordQuery, GetHasFinancialPasswordQueryVariables>;
export const GetIncomeChartDocument = gql`
    query getIncomeChart {
  getIncomeChart
}
    `;

/**
 * __useGetIncomeChartQuery__
 *
 * To run a query within a React component, call `useGetIncomeChartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncomeChartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncomeChartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIncomeChartQuery(baseOptions?: Apollo.QueryHookOptions<GetIncomeChartQuery, GetIncomeChartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIncomeChartQuery, GetIncomeChartQueryVariables>(GetIncomeChartDocument, options);
      }
export function useGetIncomeChartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIncomeChartQuery, GetIncomeChartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIncomeChartQuery, GetIncomeChartQueryVariables>(GetIncomeChartDocument, options);
        }
export type GetIncomeChartQueryHookResult = ReturnType<typeof useGetIncomeChartQuery>;
export type GetIncomeChartLazyQueryHookResult = ReturnType<typeof useGetIncomeChartLazyQuery>;
export type GetIncomeChartQueryResult = Apollo.QueryResult<GetIncomeChartQuery, GetIncomeChartQueryVariables>;
export const GetIsWithdrawalOpenDocument = gql`
    query getIsWithdrawalOpen {
  getIsWithdrawalOpen
}
    `;

/**
 * __useGetIsWithdrawalOpenQuery__
 *
 * To run a query within a React component, call `useGetIsWithdrawalOpenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIsWithdrawalOpenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIsWithdrawalOpenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIsWithdrawalOpenQuery(baseOptions?: Apollo.QueryHookOptions<GetIsWithdrawalOpenQuery, GetIsWithdrawalOpenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIsWithdrawalOpenQuery, GetIsWithdrawalOpenQueryVariables>(GetIsWithdrawalOpenDocument, options);
      }
export function useGetIsWithdrawalOpenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIsWithdrawalOpenQuery, GetIsWithdrawalOpenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIsWithdrawalOpenQuery, GetIsWithdrawalOpenQueryVariables>(GetIsWithdrawalOpenDocument, options);
        }
export type GetIsWithdrawalOpenQueryHookResult = ReturnType<typeof useGetIsWithdrawalOpenQuery>;
export type GetIsWithdrawalOpenLazyQueryHookResult = ReturnType<typeof useGetIsWithdrawalOpenLazyQuery>;
export type GetIsWithdrawalOpenQueryResult = Apollo.QueryResult<GetIsWithdrawalOpenQuery, GetIsWithdrawalOpenQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  getMe {
    id
    full_name
    username
    email
    phone_number
    avatar_url
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetMyBalanceCardDocument = gql`
    query getMyBalanceCard($card: String!) {
  getMyBalanceCard(card: $card) {
    id
    usd_cents
    card
    formatted_usd_value
  }
}
    `;

/**
 * __useGetMyBalanceCardQuery__
 *
 * To run a query within a React component, call `useGetMyBalanceCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBalanceCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBalanceCardQuery({
 *   variables: {
 *      card: // value for 'card'
 *   },
 * });
 */
export function useGetMyBalanceCardQuery(baseOptions: Apollo.QueryHookOptions<GetMyBalanceCardQuery, GetMyBalanceCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBalanceCardQuery, GetMyBalanceCardQueryVariables>(GetMyBalanceCardDocument, options);
      }
export function useGetMyBalanceCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBalanceCardQuery, GetMyBalanceCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBalanceCardQuery, GetMyBalanceCardQueryVariables>(GetMyBalanceCardDocument, options);
        }
export type GetMyBalanceCardQueryHookResult = ReturnType<typeof useGetMyBalanceCardQuery>;
export type GetMyBalanceCardLazyQueryHookResult = ReturnType<typeof useGetMyBalanceCardLazyQuery>;
export type GetMyBalanceCardQueryResult = Apollo.QueryResult<GetMyBalanceCardQuery, GetMyBalanceCardQueryVariables>;
export const GetMyBitcoinWalletDocument = gql`
    query getMyBitcoinWallet {
  getMyBitcoinWallet
}
    `;

/**
 * __useGetMyBitcoinWalletQuery__
 *
 * To run a query within a React component, call `useGetMyBitcoinWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBitcoinWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBitcoinWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyBitcoinWalletQuery(baseOptions?: Apollo.QueryHookOptions<GetMyBitcoinWalletQuery, GetMyBitcoinWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyBitcoinWalletQuery, GetMyBitcoinWalletQueryVariables>(GetMyBitcoinWalletDocument, options);
      }
export function useGetMyBitcoinWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBitcoinWalletQuery, GetMyBitcoinWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyBitcoinWalletQuery, GetMyBitcoinWalletQueryVariables>(GetMyBitcoinWalletDocument, options);
        }
export type GetMyBitcoinWalletQueryHookResult = ReturnType<typeof useGetMyBitcoinWalletQuery>;
export type GetMyBitcoinWalletLazyQueryHookResult = ReturnType<typeof useGetMyBitcoinWalletLazyQuery>;
export type GetMyBitcoinWalletQueryResult = Apollo.QueryResult<GetMyBitcoinWalletQuery, GetMyBitcoinWalletQueryVariables>;
export const GetMyGainsChartDocument = gql`
    query getMyGainsChart($month: Float!, $year: Float!) {
  getMyGainsChart(month: $month, year: $year)
}
    `;

/**
 * __useGetMyGainsChartQuery__
 *
 * To run a query within a React component, call `useGetMyGainsChartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyGainsChartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyGainsChartQuery({
 *   variables: {
 *      month: // value for 'month'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetMyGainsChartQuery(baseOptions: Apollo.QueryHookOptions<GetMyGainsChartQuery, GetMyGainsChartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyGainsChartQuery, GetMyGainsChartQueryVariables>(GetMyGainsChartDocument, options);
      }
export function useGetMyGainsChartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyGainsChartQuery, GetMyGainsChartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyGainsChartQuery, GetMyGainsChartQueryVariables>(GetMyGainsChartDocument, options);
        }
export type GetMyGainsChartQueryHookResult = ReturnType<typeof useGetMyGainsChartQuery>;
export type GetMyGainsChartLazyQueryHookResult = ReturnType<typeof useGetMyGainsChartLazyQuery>;
export type GetMyGainsChartQueryResult = Apollo.QueryResult<GetMyGainsChartQuery, GetMyGainsChartQueryVariables>;
export const GetMyIndicationLinkDocument = gql`
    query getMyIndicationLink {
  getMyIndicationLink
}
    `;

/**
 * __useGetMyIndicationLinkQuery__
 *
 * To run a query within a React component, call `useGetMyIndicationLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyIndicationLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyIndicationLinkQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyIndicationLinkQuery(baseOptions?: Apollo.QueryHookOptions<GetMyIndicationLinkQuery, GetMyIndicationLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyIndicationLinkQuery, GetMyIndicationLinkQueryVariables>(GetMyIndicationLinkDocument, options);
      }
export function useGetMyIndicationLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyIndicationLinkQuery, GetMyIndicationLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyIndicationLinkQuery, GetMyIndicationLinkQueryVariables>(GetMyIndicationLinkDocument, options);
        }
export type GetMyIndicationLinkQueryHookResult = ReturnType<typeof useGetMyIndicationLinkQuery>;
export type GetMyIndicationLinkLazyQueryHookResult = ReturnType<typeof useGetMyIndicationLinkLazyQuery>;
export type GetMyIndicationLinkQueryResult = Apollo.QueryResult<GetMyIndicationLinkQuery, GetMyIndicationLinkQueryVariables>;
export const GetMyProgressChartDocument = gql`
    query getMyProgressChart {
  getMyProgressChart
}
    `;

/**
 * __useGetMyProgressChartQuery__
 *
 * To run a query within a React component, call `useGetMyProgressChartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProgressChartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProgressChartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyProgressChartQuery(baseOptions?: Apollo.QueryHookOptions<GetMyProgressChartQuery, GetMyProgressChartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProgressChartQuery, GetMyProgressChartQueryVariables>(GetMyProgressChartDocument, options);
      }
export function useGetMyProgressChartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProgressChartQuery, GetMyProgressChartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProgressChartQuery, GetMyProgressChartQueryVariables>(GetMyProgressChartDocument, options);
        }
export type GetMyProgressChartQueryHookResult = ReturnType<typeof useGetMyProgressChartQuery>;
export type GetMyProgressChartLazyQueryHookResult = ReturnType<typeof useGetMyProgressChartLazyQuery>;
export type GetMyProgressChartQueryResult = Apollo.QueryResult<GetMyProgressChartQuery, GetMyProgressChartQueryVariables>;
export const GetMyStatmentDocument = gql`
    query getMyStatment($month: Float!, $year: Float!, $card: String!) {
  getMyStatment(month: $month, year: $year, card: $card) {
    id
    description
    formatted_usd_value
    formatted_date
    color
  }
}
    `;

/**
 * __useGetMyStatmentQuery__
 *
 * To run a query within a React component, call `useGetMyStatmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyStatmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyStatmentQuery({
 *   variables: {
 *      month: // value for 'month'
 *      year: // value for 'year'
 *      card: // value for 'card'
 *   },
 * });
 */
export function useGetMyStatmentQuery(baseOptions: Apollo.QueryHookOptions<GetMyStatmentQuery, GetMyStatmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyStatmentQuery, GetMyStatmentQueryVariables>(GetMyStatmentDocument, options);
      }
export function useGetMyStatmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyStatmentQuery, GetMyStatmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyStatmentQuery, GetMyStatmentQueryVariables>(GetMyStatmentDocument, options);
        }
export type GetMyStatmentQueryHookResult = ReturnType<typeof useGetMyStatmentQuery>;
export type GetMyStatmentLazyQueryHookResult = ReturnType<typeof useGetMyStatmentLazyQuery>;
export type GetMyStatmentQueryResult = Apollo.QueryResult<GetMyStatmentQuery, GetMyStatmentQueryVariables>;
export const GetMyWithdrawalStatmentDocument = gql`
    query getMyWithdrawalStatment($month: Float!, $year: Float!) {
  getMyWithdrawalStatment(month: $month, year: $year) {
    id
    address
    txid
    formatted_usd_value
    formatted_btc_usd_conversion
    formatted_btc_amount
    txid_link
    formatted_date
  }
}
    `;

/**
 * __useGetMyWithdrawalStatmentQuery__
 *
 * To run a query within a React component, call `useGetMyWithdrawalStatmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyWithdrawalStatmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyWithdrawalStatmentQuery({
 *   variables: {
 *      month: // value for 'month'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetMyWithdrawalStatmentQuery(baseOptions: Apollo.QueryHookOptions<GetMyWithdrawalStatmentQuery, GetMyWithdrawalStatmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyWithdrawalStatmentQuery, GetMyWithdrawalStatmentQueryVariables>(GetMyWithdrawalStatmentDocument, options);
      }
export function useGetMyWithdrawalStatmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyWithdrawalStatmentQuery, GetMyWithdrawalStatmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyWithdrawalStatmentQuery, GetMyWithdrawalStatmentQueryVariables>(GetMyWithdrawalStatmentDocument, options);
        }
export type GetMyWithdrawalStatmentQueryHookResult = ReturnType<typeof useGetMyWithdrawalStatmentQuery>;
export type GetMyWithdrawalStatmentLazyQueryHookResult = ReturnType<typeof useGetMyWithdrawalStatmentLazyQuery>;
export type GetMyWithdrawalStatmentQueryResult = Apollo.QueryResult<GetMyWithdrawalStatmentQuery, GetMyWithdrawalStatmentQueryVariables>;
export const GetPlansDocument = gql`
    query getPlans {
  getPlans {
    id
    name
    usd_cents
    formatted_usd_value
  }
}
    `;

/**
 * __useGetPlansQuery__
 *
 * To run a query within a React component, call `useGetPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlansQuery(baseOptions?: Apollo.QueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, options);
      }
export function useGetPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, options);
        }
export type GetPlansQueryHookResult = ReturnType<typeof useGetPlansQuery>;
export type GetPlansLazyQueryHookResult = ReturnType<typeof useGetPlansLazyQuery>;
export type GetPlansQueryResult = Apollo.QueryResult<GetPlansQuery, GetPlansQueryVariables>;
export const GetUnilevelByUserIdDocument = gql`
    query getUnilevelByUserId($user_id: String!) {
  getUnilevelByUserId(user_id: $user_id) {
    user_id
    indicator_id
    user {
      id
      full_name
      email
      phone_number
    }
  }
}
    `;

/**
 * __useGetUnilevelByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUnilevelByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnilevelByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnilevelByUserIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUnilevelByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetUnilevelByUserIdQuery, GetUnilevelByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnilevelByUserIdQuery, GetUnilevelByUserIdQueryVariables>(GetUnilevelByUserIdDocument, options);
      }
export function useGetUnilevelByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnilevelByUserIdQuery, GetUnilevelByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnilevelByUserIdQuery, GetUnilevelByUserIdQueryVariables>(GetUnilevelByUserIdDocument, options);
        }
export type GetUnilevelByUserIdQueryHookResult = ReturnType<typeof useGetUnilevelByUserIdQuery>;
export type GetUnilevelByUserIdLazyQueryHookResult = ReturnType<typeof useGetUnilevelByUserIdLazyQuery>;
export type GetUnilevelByUserIdQueryResult = Apollo.QueryResult<GetUnilevelByUserIdQuery, GetUnilevelByUserIdQueryVariables>;
export const GetValidIndicatorByUsernameDocument = gql`
    query getValidIndicatorByUsername($username: String!) {
  getValidIndicatorByUsername(username: $username) {
    id
    full_name
  }
}
    `;

/**
 * __useGetValidIndicatorByUsernameQuery__
 *
 * To run a query within a React component, call `useGetValidIndicatorByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidIndicatorByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidIndicatorByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetValidIndicatorByUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetValidIndicatorByUsernameQuery, GetValidIndicatorByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetValidIndicatorByUsernameQuery, GetValidIndicatorByUsernameQueryVariables>(GetValidIndicatorByUsernameDocument, options);
      }
export function useGetValidIndicatorByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetValidIndicatorByUsernameQuery, GetValidIndicatorByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetValidIndicatorByUsernameQuery, GetValidIndicatorByUsernameQueryVariables>(GetValidIndicatorByUsernameDocument, options);
        }
export type GetValidIndicatorByUsernameQueryHookResult = ReturnType<typeof useGetValidIndicatorByUsernameQuery>;
export type GetValidIndicatorByUsernameLazyQueryHookResult = ReturnType<typeof useGetValidIndicatorByUsernameLazyQuery>;
export type GetValidIndicatorByUsernameQueryResult = Apollo.QueryResult<GetValidIndicatorByUsernameQuery, GetValidIndicatorByUsernameQueryVariables>;